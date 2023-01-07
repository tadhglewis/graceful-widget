import React from 'react';
import { renderToString } from 'react-dom/server';
import type { Render } from 'sku';

// import App from './App/App';
// import { ClientContext } from './types';

interface RenderContext {
  appHtml: string;
}

const skuRender: Render<RenderContext> = {
  renderApp: ({ SkuProvider }) => {
    const appHtml = renderToString(
      <SkuProvider>
        {/* <App environment={environment as ClientContext['environment']} /> */}
      </SkuProvider>,
    );

    return {
      appHtml,
    };
  },

  // provideClientContext: ({ environment }) => ({
  //   environment,
  // }),

  renderDocument: () => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Test WC</title>
    </head>
    <body>
      <h1>Hi!</h1>
      <script src="https://graceful-widget.pages.dev/graceful-widget.js"></script>
      <job-widget></job-widget>
      <form-widget></form-widget>
    </body>
  </html>  
  `,
};

export default skuRender;
