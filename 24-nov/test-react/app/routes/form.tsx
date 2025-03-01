import { createFileRoute } from "@tanstack/react-router"
import { useForm } from "@tanstack/react-form"
import { Panel } from "~/components/Panel"
import type { FieldApi } from "@tanstack/react-form"

function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em>{field.state.meta.errors.join(", ")}</em>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  )
}

function RouteComponent() {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: async ({ value }) => {
      try {
        console.log(value, "value")
      } catch (error) {}
    },
  })
  return (
    <>
      <Panel header="Form">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
        >
          <div>
            <form.Field
              name="firstName"
              validators={{
                onChange: ({ value }) =>
                  !value
                    ? "A first name is required"
                    : value.length < 3
                      ? "First name must be at least 3 characters"
                      : undefined,
                onChangeAsyncDebounceMs: 500,
                onChangeAsync: async ({ value }) => {
                  await new Promise((resolve) => setTimeout(resolve, 1000))
                  return (
                    value.includes("error") &&
                    'No "error" allowed in first name'
                  )
                },
              }}
              children={(field) => {
                // Avoid hasty abstractions. Render props are great!
                return (
                  <>
                    <label htmlFor={field.name}>First Name:</label>
                    <input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    <FieldInfo field={field} />
                  </>
                )
              }}
            />
          </div>
          <div>
            <form.Field
              name="lastName"
              children={(field) => (
                <>
                  <label htmlFor={field.name}>Last Name:</label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </>
              )}
            />
          </div>
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <button type="submit" disabled={!canSubmit}>
                {isSubmitting ? "..." : "Submit"}
              </button>
            )}
          />
        </form>
      </Panel>
    </>
  )
}

export const Route = createFileRoute("/form")({
  component: () => <RouteComponent />,
})
