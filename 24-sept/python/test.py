import requests
import json

url = "http://localhost:8000/v1/chat/completions"
headers = {"Content-Type": "application/json"}
data = {
    "model": "mlx-community/gemma-2-2b-it-4bit",
    "messages": [{"role": "user", "content": "what is nix derivation"}],
    "max_tokens": 100
}

response = requests.post(url, headers=headers, data=json.dumps(data))
print(response.json())
