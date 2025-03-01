# New App

> New Solid/Grafbase/EdgeDB/Tauri app

Uses:

- [Grafbase](https://grafbase.com/) for API
- [Solid](https://www.solidjs.com/) for web UI
- [Tauri](https://tauri.app/) and [Rust](https://www.rust-lang.org/) for desktop app
- [Hanko](https://www.hanko.io/) for authentication

Is used in production by [Learn Anything](https://github.com/learn-anything/learn-anything.xyz).

## Install

Clone this repo and:

```
cd template
pnpm i
```

Follow instructions in [template/readme.md](template/readme.md).

In future [template CLI](https://github.com/fabiospampinato/template) will be used to use the template more easily and automatically replace the variables inside the template with user defined ones. Things like `{{name}}` and `{{description}}` that you will see. For now replace them manually.

<!-- Install [template](https://github.com/fabiospampinato/template) by running:

```
npm install -g @fabiospampinato/template
```

Then run:

```
template install nikitavoloboev/new-app app
```

## Use template

```
template new app my-app
```

And fill in variables for the project like name, description.

After filling in values, you can `cd` into the project and read the `readme.md` for the setup instructions. -->

## Deploy template

Template is setup to be used with [Cloudflare Pages](https://pages.cloudflare.com/) as deploy target.

Push the template code to repository (private or public) and connect it in [Cloudflare Dashboard](https://dash.cloudflare.com).

It should automatically deploy the code and do so on every commit to `main` branch.

## More templates

Other templates can be seen [here](https://github.com/nikitavoloboev/new).
