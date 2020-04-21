import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Label = styled.label`
  cursor: pointer;
  user-select: none;
  color: ${theme.colors.black};
  display: block;
  padding: ${theme.space[1]} 0;
  opacity: 0.35;
  font-size: ${theme.fontSizes[5]};
  font-weight: ${theme.fontWeights.semibold};

  &:hover,
  &:focus-within {
    opacity: 1;
  }
`;

const Input = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

const OptionBlock: FunctionComponent<any> = ({ children, ...props }) => {
  return (
    <Label>
      <Input type={'radio'} {...props} />
      {children}
    </Label>
  );
};

export default OptionBlock;
