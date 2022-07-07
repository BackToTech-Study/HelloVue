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

## How to view output on local machine without NodeJS
* You must have an entry point in the application (in our case `index.html`)
* `index.html` must load VueJS via a CDN (content delivery network) or hosted localy (downside is we don't get any new features and updates)
* To bypas CORS regulations when loading local files via import in pure JS we need a local server (I recomend Live Server plugin for VS Code)
* To view output just start the `index.html` page in Live server.
* the `index.html` file will load the content of `app.js`
```
        <script type="module">1
            import app from './app.js';
            const { createApp } = Vue;

            createApp(app).mount('#app');
        </script>
```
* the `app.js` imports and uses the `From.js`
```
    import Form from "./Form.js"
    ...
    <div><Form></Form></div>
```
* In this case the `Form.js` file was created by hand (hard coded). The browser does not know about the .vue extension.
