import React, {FunctionComponent} from 'react';
import Step, {IStep} from './Step';
import OptionBlock from '../OptionBlock';

const WhatTypeOfHome: FunctionComponent<IStep> = (props) => (
  <Step title={'What type of home are you interested in?'} {...props}>
    <OptionBlock name={'options'} value={'option1'}>
      Primary residence
    </OptionBlock>

    <OptionBlock name={'options'} value={'option2'}>
      Second home
    </OptionBlock>

    <OptionBlock name={'options'} value={'option3'}>
      Investment
    </OptionBlock>
  </Step>
);

export default WhatTypeOfHome;
