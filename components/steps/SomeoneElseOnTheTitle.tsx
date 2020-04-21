import React, {FunctionComponent} from 'react';
import Step, {IStep} from './Step';
import OptionInline from '../../components/OptionInline';

const SomeoneElseOnTheTitle: FunctionComponent<IStep> = (props) => (
  <Step title={'Will there be someone else on the title with you?'} {...props}>
    <OptionInline name={'options'} value={'option1'}>
      Yes
    </OptionInline>

    <OptionInline name={'options'} value={'option2'}>
      No
    </OptionInline>
  </Step>
);

export default SomeoneElseOnTheTitle;
