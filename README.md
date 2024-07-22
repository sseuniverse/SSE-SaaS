![nuxt-ui-saas-social-card](https://github.com/nuxt-ui-pro/saas/assets/739984/50bf4ddd-c4d5-47e5-a09e-0f699513dfb5)

# SSE Nuxt UI - SaaS Template

[![SSE Nuxt UI](https://img.shields.io/badge/Made%20with-SSE%20Nuxt%20UI-00DC82?logo=nuxt.js&labelColor=020420)](https://ui.nuxt.com/pro)

- [Live demo](https://saas-template.nuxt.dev/)
- [Play on Stackblitz](https://stackblitz.com/github/sseuniverse/sse-saas)
- [Documentation](#) Comming Soon...

## Quick Start

```bash [Termial]
git clone https://github.com/sseuniverse/SSE-SaaS.git
```

## Setup
Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Nuxt Studio integration

Add `@nuxthq/studio` dependency to your package.json:

```bash
# npm
npm install --save-dev @nuxthq/studio

# pnpm
pnpm add -D @nuxthq/studio

# yarn
yarn add -D @nuxthq/studio

# bun
bun add -d @nuxthq/studio
```

Add this module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  ...
  modules: [
    ...
    '@nuxthq/studio'
  ]
})
```

Read more on [Nuxt Studio docs](https://nuxt.studio/docs/get-started/setup).

## Renovate integration

Install [Renovate GitHub app](https://github.com/apps/renovate/installations/select_target) on your repository and you are good to go.
