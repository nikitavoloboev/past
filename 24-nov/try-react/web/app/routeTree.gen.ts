/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RedirectImport } from './routes/redirect'
import { Route as DeferredImport } from './routes/deferred'
import { Route as SolanaRouteImport } from './routes/solana/route'
import { Route as IndexImport } from './routes/index'
import { Route as SolanaIndexImport } from './routes/solana/index'

// Create/Update Routes

const RedirectRoute = RedirectImport.update({
  id: '/redirect',
  path: '/redirect',
  getParentRoute: () => rootRoute,
} as any)

const DeferredRoute = DeferredImport.update({
  id: '/deferred',
  path: '/deferred',
  getParentRoute: () => rootRoute,
} as any)

const SolanaRouteRoute = SolanaRouteImport.update({
  id: '/solana',
  path: '/solana',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SolanaIndexRoute = SolanaIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => SolanaRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/solana': {
      id: '/solana'
      path: '/solana'
      fullPath: '/solana'
      preLoaderRoute: typeof SolanaRouteImport
      parentRoute: typeof rootRoute
    }
    '/deferred': {
      id: '/deferred'
      path: '/deferred'
      fullPath: '/deferred'
      preLoaderRoute: typeof DeferredImport
      parentRoute: typeof rootRoute
    }
    '/redirect': {
      id: '/redirect'
      path: '/redirect'
      fullPath: '/redirect'
      preLoaderRoute: typeof RedirectImport
      parentRoute: typeof rootRoute
    }
    '/solana/': {
      id: '/solana/'
      path: '/'
      fullPath: '/solana/'
      preLoaderRoute: typeof SolanaIndexImport
      parentRoute: typeof SolanaRouteImport
    }
  }
}

// Create and export the route tree

interface SolanaRouteRouteChildren {
  SolanaIndexRoute: typeof SolanaIndexRoute
}

const SolanaRouteRouteChildren: SolanaRouteRouteChildren = {
  SolanaIndexRoute: SolanaIndexRoute,
}

const SolanaRouteRouteWithChildren = SolanaRouteRoute._addFileChildren(
  SolanaRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/solana': typeof SolanaRouteRouteWithChildren
  '/deferred': typeof DeferredRoute
  '/redirect': typeof RedirectRoute
  '/solana/': typeof SolanaIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/deferred': typeof DeferredRoute
  '/redirect': typeof RedirectRoute
  '/solana': typeof SolanaIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/solana': typeof SolanaRouteRouteWithChildren
  '/deferred': typeof DeferredRoute
  '/redirect': typeof RedirectRoute
  '/solana/': typeof SolanaIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/solana' | '/deferred' | '/redirect' | '/solana/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/deferred' | '/redirect' | '/solana'
  id: '__root__' | '/' | '/solana' | '/deferred' | '/redirect' | '/solana/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  SolanaRouteRoute: typeof SolanaRouteRouteWithChildren
  DeferredRoute: typeof DeferredRoute
  RedirectRoute: typeof RedirectRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  SolanaRouteRoute: SolanaRouteRouteWithChildren,
  DeferredRoute: DeferredRoute,
  RedirectRoute: RedirectRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/solana",
        "/deferred",
        "/redirect"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/solana": {
      "filePath": "solana/route.tsx",
      "children": [
        "/solana/"
      ]
    },
    "/deferred": {
      "filePath": "deferred.tsx"
    },
    "/redirect": {
      "filePath": "redirect.tsx"
    },
    "/solana/": {
      "filePath": "solana/index.tsx",
      "parent": "/solana"
    }
  }
}
ROUTE_MANIFEST_END */
