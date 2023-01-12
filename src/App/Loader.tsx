import React from 'react';
import ReactDOM from 'react-dom/client';
import loadable from 'sku/@loadable/component';

type Config = {
  name: string;
  component: ReturnType<typeof loadable>;
}[];

const config: Config = [
  {
    name: 'job-widget',
    component: loadable(() => import('./widgets/JobWidget'), {
      resolveComponent: ({ Component }) => Component,
    }),
  },
  // {
  //   name: 'form-widget',
  //   component: loadable(() => import('./widgets/FormWidget')),
  // },
];

config.forEach(({ name, component: Component }) => {
  // Register web components
  customElements.define(
    name,
    class extends HTMLElement {
      input: unknown;

      connectedCallback() {
        // const mountPoint = document.createElement('span');
        // this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

        const root = ReactDOM.createRoot(this);
        root.render(<Component {...(this.input ?? {})} />);
      }
    },
  );
});

// Alternative render abstraction over react render
// SEEKWidget.render("widgetName", options)
// No need to pass node ref as these can be static - do we need the option of passing a ref?
