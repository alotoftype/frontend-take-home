import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Button = styled.button`
  cursor: pointer;
  padding: ${theme.space[1]} ${theme.space[4]};
  color: ${theme.colors.white};
  background-color: ${theme.colors.green};
  border-radius: ${theme.radii[2]};
  font-size: ${theme.fontSizes[1]};

  & + & {
    margin: 0 ${theme.space[1]};
  }

  &:first-child {
    margin-left: 0;
  }
`;

export default Button;
