import React from 'react';
import { action } from '@storybook/addon-actions';
import CollapsibleForm from './CollapsibleForm';

export default {
  title: 'CollapsibleForm',
  component: CollapsibleForm,
};

export const main = () => (
  <CollapsibleForm title={'Click Me'} onChange={action('onChange')}>
    <label>
      Foo
      <input type={'number'} name={'foo'} placeholder={'0'} />
    </label>

    <label>
      Bar
      <input type={'number'} name={'bar'} placeholder={'0'} />
    </label>
  </CollapsibleForm>
);
