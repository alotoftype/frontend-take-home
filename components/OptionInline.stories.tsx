import React from 'react';
import OptionInline from './OptionInline';

export default {
  title: 'OptionInline',
  component: OptionInline,
};

export const main = () => (
  <div style={{ padding: '3rem' }}>
    <OptionInline name='options' value='option1'>
      Foo
    </OptionInline>

    <OptionInline name='options' value='option2'>
      Bar
    </OptionInline>

    <OptionInline name='options' value='option3'>
      Baz
    </OptionInline>
  </div>
);
