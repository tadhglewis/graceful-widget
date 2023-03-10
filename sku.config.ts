import type { SkuConfig } from 'sku';

const skuConfig: SkuConfig = {
  clientEntry: 'src/client.tsx',
  renderEntry: 'src/render.tsx',
  libraryEntry: 'src/App/Loader.tsx',
  libraryName: 'graceful-widget',
  environments: ['development', 'production'],
  publicPath: 'https://graceful-widget.pages.dev/', // <-- Required for sku build output
  orderImports: true,
};

export default skuConfig;
