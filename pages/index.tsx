import React, { FunctionComponent, ReactNode } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Button from '../components/Button';
import theme from '../theme';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  color: ${theme.colors.white};
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 50%;
  min-height: 100vh;
`;

const Left = styled(Section)`
  background-color: ${theme.colors.purple};
`;

const Right = styled(Section)`
  background-color: ${theme.colors.darkpurple};
`;

const Heading = styled.h1`
  font-size: ${theme.fontSizes[8]};
`;

const Centered = styled.div`
  text-align: center;
`;

const Option: FunctionComponent<{ children: ReactNode }> = ({ children }) => (
  <Centered>
    <Heading>{children}</Heading>
    <Link href={'/preapproval/1'} passHref={true}>
      <Button as={'a'}>Continue</Button>
    </Link>
  </Centered>
);

const Emphasis = styled.em`
  font-style: normal;
  color: ${theme.colors.green};
`;

const Index = () => (
  <Wrapper>
    <Left>
      <Option>
        I’m <Emphasis>buying</Emphasis>
        <br />a home
      </Option>
    </Left>
    <Right>
      <Option>
        I’m <Emphasis>refinancing</Emphasis>
        <br />
        my home
      </Option>
    </Right>
  </Wrapper>
);

export default Index;
