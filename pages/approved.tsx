import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import theme from '../theme';
import Button from '../components/Button';

const Outer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  color: ${theme.colors.white};
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.black};
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/sky.webp');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;

const Inner = styled.div`
  display: flex;
  padding: 5rem;
`;

const Title = styled.h1`
  font-size: ${theme.fontSizes[8]};
`;

const Description = styled.p`
  line-height: 1.5;
  padding-bottom: ${theme.space[3]};
`;

const Left = styled.div`
  flex-basis: 70%;
`;

const Right = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Approved: FunctionComponent = () => (
  <>
    <Outer>
      <Inner>
        <Left>
          <Title>Congratulations, you have been pre-approved</Title>
          <Description>
            Here’s your customized pre-approval letter for the property you’re bidding on.
            <br />
            It will show how strong you are as a potential bidder.
          </Description>
          <Button>Go to your dashboard</Button>
        </Left>

        <Right>
          <img src={'/contract.webp'} alt={'Placeholder approval contract from Better'} />
        </Right>
      </Inner>
    </Outer>
    <Cover />
  </>
);

export default Approved;
