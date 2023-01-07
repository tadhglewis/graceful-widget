import { BraidProvider } from 'braid-design-system';
import 'braid-design-system/reset';
import apac from 'braid-design-system/themes/apac';
import React from 'react';

export const Widget = ({ children }: { children: React.ReactNode }) => (
  <BraidProvider theme={apac}>{children}</BraidProvider>
);
