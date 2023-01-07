import 'braid-design-system/reset';
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
  BraidProvider,
} from 'braid-design-system';
import apac from 'braid-design-system/themes/apac';
import React from 'react';

export default () => (
  <BraidProvider theme={apac}>
    <Card>
      <Stack space="gutter">
        <Columns space="gutter">
          <Column>
            <Stack space="small">
              <Badge tone="positive">New</Badge>
              <Heading level="3">Product Designer</Heading>
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
  </BraidProvider>
);
