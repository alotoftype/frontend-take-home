import React, {FunctionComponent} from 'react';
import Step, {IStep} from './Step';
import OptionBlock from '../OptionBlock';

const WhatTypeOfProperty: FunctionComponent<IStep> = (props) => (
  <Step title={'What type of property is it?'} {...props}>
    <OptionBlock name={'options'} value={'option1'}>
      Single family
    </OptionBlock>

    <OptionBlock name={'options'} value={'option2'}>
      Townhouse
    </OptionBlock>

    <OptionBlock name={'options'} value={'option3'}>
      Condo
    </OptionBlock>

    <OptionBlock name={'options'} value={'option4'}>
      2 to 4 units
    </OptionBlock>
  </Step>
);

export default WhatTypeOfProperty;
