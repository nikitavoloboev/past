import aiohttp
import json
import gradio as gr
from gradio import ChatMessage

class CustomChatAPI:
    def __init__(self, base_url, model):
        self.base_url = base_url
        self.model = model

    async def get_response(self, messages, tools):
        async with aiohttp.ClientSession() as session:
            payload = {
                "model": self.model,
                "messages": messages,
                "tools": tools,
                "max_tokens": 150,
                "temperature": 0.7,
                "stream": False
            }
            async with session.post(f"{self.base_url}/v1/chat/completions", json=payload) as response:
                raw_response = await response.text()
                try:
                    return json.loads(raw_response)
                except json.JSONDecodeError:
                    return {"error": "Failed to parse JSON", "raw": raw_response}

# Initialize the custom API
api = CustomChatAPI(base_url="http://localhost:8000", model="mlx-community/Meta-Llama-3.1-8B-Instruct-8bit")

# Define the weather tool
weather_tool = {
    "name": "get_current_weather",
    "description": "Get the current weather",
    "parameters": {
        "type": "object",
        "properties": {
            "location": {
                "type": "string",
                "description": "The city and state, e.g. San Francisco, CA"
            },
            "format": {
                "type": "string",
                "enum": ["celsius"],
                "description": "The temperature unit to use. Infer this from the user's location."
            }
        },
        "required": ["location", "format"]
    }
}

# Define one canned response
canned_response = "What's the weather like today?"

def chatmessage_to_tuple(chat_message):
    if chat_message.role == "human":
        return (chat_message.content, None)
    else:
        content = chat_message.content
        if chat_message.metadata and "title" in chat_message.metadata:
            content = f"{chat_message.metadata['title']}\n{content}"
        return (None, content)

async def chat_with_api(user_input, history):
    chat_history = [ChatMessage(role="user", content=user_input)]
    yield [chatmessage_to_tuple(msg) for msg in chat_history]

    messages = [{"role": "user", "content": user_input}]
    tools = [weather_tool]

    try:
        response = await api.get_response(messages, tools)

        if "error" in response:
            chat_history.append(ChatMessage(role="assistant", content=f"Error: {response['error']}\nRaw: {response['raw']}"))
        elif "tool_calls" in response:
            messages.append({"role": "assistant", "content": json.dumps(response["tool_calls"])})
            for tool_call in response["tool_calls"]:
                function_call = tool_call["function"]
                tool_name = function_call["name"]
                tool_arguments = function_call["arguments"]

                used_code = tool_name == "code interpreter"
                content = tool_arguments
                if used_code:
                    content = f"```py\n{content}\n```"

                chat_message = {
                    "role":"user",
                    "content":"""API response: {"name": "San Francisco", "temp_c": 19, "temp_f": 67}"""
                }
                messages.append(chat_message)

            # Make another API call for the final response
            final_response = await api.get_response(messages, None)

            if "error" in final_response:
                chat_history.append(ChatMessage(role="assistant", content=f"Error: {final_response['error']}\nRaw: {final_response['raw']}"))
            elif "choices" in final_response and final_response["choices"]:
                print(messages)
                print(final_response)
                content = final_response["choices"][0]["message"]["content"]
                chat_history.append(ChatMessage(role="assistant", metadata={"title": f"🛠️ Used tool {tool_name}"}, content=content))
        elif "choices" in response and response["choices"]:
            content = response["choices"][0]["message"]["content"]
            chat_history.append(ChatMessage(role="assistant", content=content))
        else:
            chat_history.append(ChatMessage(role="assistant", content="Unexpected response format"))

    except Exception as e:
        error_message = f"An error occurred: {str(e)}"
        chat_history.append(ChatMessage(role="assistant", content=error_message))

    yield [chatmessage_to_tuple(msg) for msg in chat_history]

def use_canned_response(history):
    return canned_response, history

# Gradio interface
with gr.Blocks() as demo:
    gr.Markdown("# FastMLX Tool Calling")
    chatbot = gr.Chatbot()
    with gr.Row():
        input_box = gr.Textbox(label="Your message", scale=4)
        canned_button = gr.Button("Ask about weather", scale=1)

    input_box.submit(chat_with_api, [input_box, chatbot], [chatbot])
    canned_button.click(use_canned_response, [chatbot], [input_box, chatbot])

demo.launch()
