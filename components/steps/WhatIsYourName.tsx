import React, { FunctionComponent } from 'react';
import Step, { IStep, Title } from './Step';
import SelectState from '../SelectState';

const WhatIsYourName: FunctionComponent<IStep> = (props) => (
  <Step title={'What’s your name?'} {...props}>
    <fieldset>
      <input placeholder={'First name'} />
      <input placeholder={'Last name'} />
    </fieldset>

    <div>
      <Title>Current address?</Title>
      <fieldset>
        <input placeholder={'Address'} />
        <input placeholder={'Apt'} />
        <input placeholder={'City'} />
        <SelectState />
        <input type={'number'} placeholder={'Zip code'} />
      </fieldset>
    </div>
  </Step>
);

export default WhatIsYourName;
