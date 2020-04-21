import React, {FunctionComponent} from 'react';
import Step, {IStep} from './Step';
import OptionBlock from '../OptionBlock';

const WhenToPurchase: FunctionComponent<IStep> = (props) => (
  <Step title={'When do you plan to purchase your property?'} {...props}>
    <OptionBlock name='options' value='option1'>
      0-3 months
    </OptionBlock>

    <OptionBlock name='options' value='option2'>
      3-6 months
    </OptionBlock>

    <OptionBlock name='options' value='option3'>
      6+ months
    </OptionBlock>

    <OptionBlock name='options' value='option4'>
      Not sure
    </OptionBlock>
  </Step>
);

export default WhenToPurchase;
