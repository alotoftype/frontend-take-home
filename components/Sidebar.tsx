import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import theme from '../theme';

interface IProps {
  step?: string;
}

const Wrapper = styled.aside`
  width: 100%;
`;

const Bold = styled.div`
  font-weight: ${theme.fontWeights.bold};
`;

const CategoryNumber = styled(Bold)`
  font-size: ${theme.fontSizes[9]};
`;

const CategoryName = styled(Bold)`
  font-size: ${theme.fontSizes[4]};
`;

const Sidebar: FunctionComponent<IProps> = ({ step = '' }) => (
  <Wrapper>
    <CategoryNumber>{step}</CategoryNumber>
    <CategoryName>Personal Information</CategoryName>

    <ul>
      <li>Where you are</li>
      <li>Property type</li>
      <li>Create account</li>
      <li>Soft credit check</li>
      <li>Something else</li>
    </ul>

    <ul style={{ opacity: 0.3 }}>
      <li>Pre-approval</li>
      <li>Home information</li>
      <li>Approval</li>
      <li>Closing</li>
    </ul>
  </Wrapper>
);

export default Sidebar;
