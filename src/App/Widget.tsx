import 'braid-design-system/reset';
import { BraidProvider } from 'braid-design-system';
import apac from 'braid-design-system/themes/apac';
import React from 'react';
import { z } from 'zod';

export const Widget = ({
  children,
  input,
  inputSchema,
}: {
  children: React.ReactNode;
  input: unknown;
  inputSchema: z.SomeZodObject;
}) => {
  inputSchema.parse(input);

  return <BraidProvider theme={apac}>{children}</BraidProvider>;
};
