// Importing custom components and registering them globally










// import Vue from 'vue'

// import TextGradient from 'components/atoms/TextGradient'

// Vue.component('TextGradient', TextGradient)











// import { createApp } from 'vue'
// // import each component
// // import Fruits from './components/Fruits.vue'
// // import Vegetables from './components/Vegetables.vue'

// import TextGradient from '../components/atoms/TextGradient.vue'

// const vueApp = createApp({
//   // register each component
//   components: { TextGradient }
// })










// import upperFirst from "lodash/upperFirst";
// import camelCase from "lodash/camelCase";

// export default ({ app }) => {
//   const requireComponent = require.context(
//     "src/components/atoms",
//     true,
//     /[A-Z-_]\w+\.(vue)$/
//   );

//   requireComponent.keys().forEach((fileName) => {
//     const componentConfig = requireComponent(fileName);
//     const componentName = upperFirst(
//       camelCase(
//         fileName
//           .split("/")
//           .pop()
//           .replace(/\.\w+$/, "")
//       )
//     );
//     app.component(componentName, componentConfig.default || componentConfig);
//   });
// };








// import { createApp } from 'vue'
// import { App } from '../App.vue'
// import TextGradient from '../components/atoms/TextGradient.vue'

// let app = createApp(App)

// // Register global components
// app.component('TextGradient', TextGradient);

// app.mount('#app')







// import { defineAsyncComponent } from 'vue';
// import { upperFirst, camelCase } from 'lodash';

// export default async ({ app }) => {
//   console.log('loading components');

//   // Use Vite's import.meta.glob to dynamically import components
//   const components = import.meta.glob('../components/**/*.vue');

//   for (const path in components) {
//     const componentConfig = await components[path]();
//     const componentName = upperFirst(
//       camelCase(
//         path
//           .split('/')
//           .pop()
//           .replace(/\.\w+$/, '') // remove file extension
//       )
//     );

//     // Globally register the component
//     app.component(
//       `Ua${componentName}`,
//       defineAsyncComponent(() => componentConfig)
//     );
//   }
// };
