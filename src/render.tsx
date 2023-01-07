import React from 'react';
import { renderToString } from 'react-dom/server';
import type { Render } from 'sku';

// import App from './App/App';
// import { ClientContext } from './types';

interface RenderContext {
  appHtml: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'job-widget': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >; // Normal web component
    }
  }
}

const skuRender: Render<RenderContext> = {
  renderApp: ({ SkuProvider }) => {
    const appHtml = renderToString(
      <SkuProvider>
        <script src="http://localhost:8080/graceful-widget.js" />
        <job-widget />
      </SkuProvider>,
    );

    return {
      appHtml,
    };
  },

  provideClientContext: ({ environment }) => ({
    environment,
  }),

  renderDocument: ({ app, bodyTags, headTags }) => {
    console.log(app);

    return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${headTags}
    </head>
    <body>
      <div id="app">${app.appHtml}</div>
      ${bodyTags}
    </body>
  </html>
  `;
  },
};

export default skuRender;
