import React from 'react'
import {
  Show,
  SimpleShowLayout,
  NumberInput,
  required
} from 'react-admin'

export default (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <NumberInput
        source='ANONYMOUS_MAX_FILE_SIZE'
        label='Max temporary file size in bytes'
        validate={required()}
      />
      <NumberInput
        source='ANONYMOUS_DEFAULT_FILE_LIFETIME'
        label='Max temporary file size in bytes'
        validate={required()}
      />
      <NumberInput
        source='ANONYMOUS_MAX_FILE_LIFETIME'
        label='Max temporary file size in bytes'
        validate={required()}
      />
      <NumberInput
        source='DEFAULT_USER_MAX_TEMPORARY_FILE_SIZE'
        label='Max temporary file size in bytes'
        validate={required()}
      />
      <NumberInput
        source='DEFAULT_USER_MAX_PERMANENT_FILE_SIZE'
        label='Max file lifetime size in ms'
        validate={required()}
      />
      <NumberInput
        source='DEFAULT_USER_DEFAULT_FILE_LIFETIME'
        label='Default file lifetime in ms'
        validate={required()}
      />
      <NumberInput
        source='DEFAULT_USER_MAX_FILE_LIFETIME'
        label='Max temporary file size in bytes'
        validate={required()}
      />
    </SimpleShowLayout>
  </Show>
)
