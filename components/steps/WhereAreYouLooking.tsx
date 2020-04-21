import React, { FunctionComponent } from 'react';
import Step, { IStep } from './Step';

const WhereAreYouLooking: FunctionComponent<IStep> = (props) => {
  return (
    <Step title={'Where are you looking?'} {...props}>
      <input placeholder={'Address'} />
    </Step>
  );
};

export default WhereAreYouLooking;
