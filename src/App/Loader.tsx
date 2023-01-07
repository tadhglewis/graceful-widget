import React from 'react';
import ReactDOM from 'react-dom';
import loadable from 'sku/@loadable/component';
import { z } from 'zod';

type Config = {
  name: string;
  component: ReturnType<typeof loadable>;
  input?: Zod.Schema;
}[];

const config: Config = [
  {
    name: 'JobWidget',
    component: loadable(() => import('./widgets/JobWidget')),
    input: z.object({ positionTitle: z.string() }),
  },
  {
    name: 'FormWidget',
    component: loadable(() => import('./widgets/FormWidget')),
  },
];

config.forEach(({ name, component: Component, input }) => {
  customElements.define(
    name,
    class extends HTMLElement {
      constructor() {
        super();

        const mountPoint = document.createElement('div');
        this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
        ReactDOM.render(<Component {...input} />, mountPoint);
      }
    },
  );
});
