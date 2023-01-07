import {
  Actions,
  Autosuggest,
  Button,
  Card,
  filterSuggestions,
  Heading,
  MonthPicker,
  Stack,
  Textarea,
  TextField,
} from 'braid-design-system';
import { AutosuggestValue } from 'braid-design-system/lib/components/Autosuggest/Autosuggest';
import React, { useState } from 'react';

export default () => {
  const [title, setTitle] = useState<AutosuggestValue<unknown>>({
    text: 'Developer',
  });
  const [company, setCompany] = useState('');
  const [started, setStarted] = useState<{ year?: number; month?: number }>({
    year: 2023,
    month: 1,
  });
  const [description, setDescription] = useState('');

  return (
    <Card>
      <Stack space="large">
        <Heading level="3">Add role</Heading>
        <Stack space="medium">
          <Autosuggest
            id="formWidget"
            label="Job title"
            suggestions={filterSuggestions([
              {
                text: 'Developer',
              },
              {
                text: 'Designer',
              },
              {
                text: 'Product Manager',
              },
            ])}
            value={title}
            onChange={(e) => setTitle(e)}
          />
          <TextField
            label="Company name"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.currentTarget.value)}
          />
          <MonthPicker
            id="started"
            label="Started"
            value={started}
            onChange={(e) => setStarted(e)}
          />
          <Textarea
            id="description"
            label="Description"
            secondaryLabel="recommended"
            description="Summarise your responsibilities, skills and achievements."
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
          <Actions>
            <Button>Save</Button>
          </Actions>
        </Stack>
      </Stack>
    </Card>
  );
};
