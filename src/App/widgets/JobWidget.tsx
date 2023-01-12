import {
  Badge,
  ButtonIcon,
  Card,
  Column,
  Columns,
  Heading,
  IconBookmark,
  IconLocation,
  IconMoney,
  IconTag,
  Inline,
  Rating,
  Stack,
  Text,
} from 'braid-design-system';
import React from 'react';
import { z } from 'zod';

import { Widget } from '../Widget';

const Input = z.object({
  positionTitle: z.string(),
  onBookmark: z.function().args(z.string()).returns(z.void()),
});
type Input = z.infer<typeof Input>;

export const Component = (input: Input) => {
  const { positionTitle, onBookmark } = input;

  return (
    <Widget inputSchema={Input} input={input}>
      <Card>
        <Stack space="gutter">
          <Columns space="gutter">
            <Column>
              <Stack space="small">
                <Badge tone="positive">New</Badge>
                <Heading level="3">{positionTitle}</Heading>
                <Inline space="small">
                  <Text tone="secondary">Braid Design Pty Ltd</Text>
                  <Rating rating={4.5} />
                </Inline>
              </Stack>
            </Column>
            <Column width="content">
              <ButtonIcon
                icon={<IconBookmark />}
                id="save-preview"
                label="Save job"
                size="large"
                variant="transparent"
                onClick={() => onBookmark('bookID')}
              />
            </Column>
          </Columns>
          <Stack space="small">
            <Text size="small" tone="secondary">
              <IconLocation /> Melbourne
            </Text>
            <Text size="small" tone="secondary">
              <IconTag /> Information Technology
            </Text>
            <Text size="small" tone="secondary">
              <IconMoney /> 150k+
            </Text>
          </Stack>
          <Text>
            Long description of card details providing more information.
          </Text>
          <Text size="xsmall" tone="secondary">
            2d ago
          </Text>
        </Stack>
      </Card>
    </Widget>
  );
};
