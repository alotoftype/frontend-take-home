import React from 'react';
import OptionBlock from './OptionBlock';

export default {
  title: 'OptionBlock',
  component: OptionBlock,
};

export const main = () => (
  <>
    <OptionBlock name='options' value='option1'>
      Foo
    </OptionBlock>

    <OptionBlock name='options' value='option2'>
      Bar
    </OptionBlock>

    <OptionBlock name='options' value='option3'>
      Baz
    </OptionBlock>
  </>
);
