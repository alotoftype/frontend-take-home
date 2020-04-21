import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Step, { IStep } from './Step';
import Button from '../Button';
import theme from '../../theme';

const InputWrapper = styled.div`
  padding-bottom: ${theme.space[3]};
`;

const CreateAccount: FunctionComponent<IStep> = ({ next, ...props }) => (
  <Step title={'Let’s save your progress by creating an account'} controls={false} {...props}>
    <p>
      You’re in good company with Better. We’ve funded over $2.0 billion, and we're just getting
      started.
    </p>

    <InputWrapper>
      <input type={'email'} placeholder={'Email'} />
    </InputWrapper>

    <div>
      <Link href={`./${next}`} passHref={true}>
        <Button>Create account</Button>
      </Link>
      or
      <Button>Sign up with Google</Button>
    </div>
  </Step>
);

export default CreateAccount;
