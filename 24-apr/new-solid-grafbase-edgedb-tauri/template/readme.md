# {{name}}

> {{description}}

## File structure

- [grafbase](grafbase) - [Grafbase](https://grafbase.com/) provides GraphQL API layer to talk with DB
  - [schema.graphql](grafbase/schema.graphql) - GraphQL schema with models + resolvers defined
  - [resolvers](grafbase/resolvers) - custom resolvers (functions) to run custom logic exposed via GraphQL
- [src](src) - code for website built with [Solid](https://www.solidjs.com/) (on top of [Solid Start](https://github.com/solidjs/solid-start) starter)
  - [GlobalContext](src/GlobalContext)
  - [components](src/components) - solid components
  - [graphql](src/graphql) - GraphQL utils
  - [lib](src/lib) - generic utils
  - [pages](src/pages) - components for pages inside the app
  - [routes](src/routes) - routes defined using file system
- [src-tauri](src-tauri) - [Tauri](https://tauri.app) rust code that makes the desktop app

## Setup

Everything is driven using [pnpm](https://pnpm.io/installation) commands as part of monorepo setup using [pnpm workspaces](https://pnpm.io/workspaces).

First run:

```
pnpm i
```

Before running the app, you need to setup up some environment variables.

### Setup env variables

Create new file `.env` at root of project with this content:

```
VITE_HANKO_API=
VITE_GRAFBASE_API_URL=http://127.0.0.1:4000/graphql
VITE_TINYBIRD_API_KEY=
```

Create new project at [hanko.io](https://www.hanko.io) and fill it with API value. Set App URL to http://localhost:3000.

Create new file at `grafbase/.env` with this content:

```
GRAFBASE_API_URL=http://127.0.0.1:4000/graphql
HANKO_API_ENDPOINT=
TINYBIRD_API_KEY=
```

[Tinybird](https://www.tinybird.co/) is used for analytics. Get key for it in dashboard.

## Run server

```
npx grafbase@latest dev
```

Open http://localhost:4000 for GraphQL playground. Read [Grafbase getting started](https://grafbase.com/docs/quickstart/get-started) to get familiar.

## Run web

```
pnpm dev
```

Then go to http://localhost:3000/, it renders route defined at [src/routes/index.tsx](src/routes/index.tsx).

If signed in (there is valid token stored in cookie), it shows the app, otherwise the landing page.

## Deploy

Connect repository with this code in [Cloudflare Dashboard](https://dash.cloudflare.com) as website.

It should automatically deploy the code and do so on every commit to `main` branch.
