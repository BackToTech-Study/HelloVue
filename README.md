# HelloVue - first steps in Vue
* Vuew is A framework 
* follow tutorial - https://vuejs.org/tutorial/#step-1

## Types
* [ ] Vue using Options
* [ ] Vue using Composition
* [ ] Vue in HTML
* [ ] Vue in SCF (Single-File Components)
* [ ] Wich one is most used !!!

## Demo concepts
* [ ] Declarative Rendering 
* [ ] Attribute Bindings 
* [ ] Event Listeners 
* [ ] Form Bindings 
* [ ] Conditional Rendering 
* [ ] List Rendering 
* [ ] Computed Property 
* [ ] Lifecycle and Template Refs 
* [ ] Watchers 
* [ ] Components 
* [ ] Props
* [ ] Emits 
* [ ] Slots 

## Generated by NPM INIT
# HelloVue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Volar 
* Is a VSCode plugin that offers vue language support
* Volar uses [petite-vue](https://github.com/vuejs/petite-vue), an alternative distribution of Vue optimized for progressive enhancement.
* Volar also supports Static Site Generation using [VitePress](https://vitepress.vuejs.org/guide/what-is-vitepress.html)
    * VitePress is currently in alpha status. It is already suitable for out-of-the-box documentation use, but the config and theming API may still change between minor releases.

## [Vite](https://vitejs.dev/)
* Vite is a lightweight and fast build tool with first-class Vue SFC support. It is created by Evan You, who is also the author of Vue!
* Vue CLI is the official webpack-based toolchain for Vue. It is now in maintenance mode and we recommend starting new projects with Vite unless you rely on specific webpack-only features. Vite will provide superior developer experience in most cases.
* in this example the vite configuration information is stored in the `vite.config.js` file

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### How is everytinhg connected
* The `index.html` file loads the `/src/main.js` file.
* The `main.js` will load the `App.vue` 
```
    import App from './App.vue'
```
* The `App.vue` loads other required components

## Documentation sources
* https://vuejs.org/guide/scaling-up/tooling.html
* https://github.com/johnsoncodehk/volar
* https://github.com/vuejs/petite-vue
* https://vitejs.dev/
* https://medium.com/js-imaginea/the-vue-js-internals-7b76f76813e3
* https://vitejs.dev/guide/ (If you want to dig deeper take a look at vite templates)
* https://webpack.js.org/concepts/
