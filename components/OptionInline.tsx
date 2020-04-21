import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import theme from '../theme';

const INDICATOR_BORDER_RADII: number | string = theme.radii[2];

const Label = styled.label`
  cursor: pointer;
  user-select: none;
  position: relative;
  padding: 1.5rem 3rem;
  color: ${theme.colors.black};

  &:not(:last-child) {
    margin-right: 1px;
  }

  &:hover,
  &:focus-within {
    color: ${theme.colors.white};
  }

  &:hover > .indicator {
    background-color: ${theme.colors.lightpurple};
  }

  &:first-child > .indicator {
    border-top-left-radius: ${INDICATOR_BORDER_RADII};
    border-bottom-left-radius: ${INDICATOR_BORDER_RADII};
  }

  &:last-child > .indicator {
    border-top-right-radius: ${INDICATOR_BORDER_RADII};
    border-bottom-right-radius: ${INDICATOR_BORDER_RADII};
  }
`;

const Input = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:checked ~ {
    color: white;
  }

  &:checked ~ .indicator {
    background-color: ${theme.colors.darkpurple};
  }
`;

const Indicator = styled.span`
  position: absolute;
  display: block;
  content: '';
  top: 0;
  left: 0;
  background-color: ${theme.colors.lightgray};
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`;

const OptionInline: FunctionComponent<any> = ({ children, ...props }) => {
  return (
    <Label>
      <Input type={'radio'} {...props} />
      <Indicator className={'indicator'} />
      {children}
    </Label>
  );
};

export default OptionInline;
