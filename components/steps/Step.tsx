import React, { FunctionComponent, ReactNode } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import theme from '../../theme';
import Button from '../Button';

export interface IStep {
  next?: number;
  previous?: number;
  finished?: boolean;
}

interface IProps extends IStep {
  title: string;
  children: ReactNode;
  controls?: boolean;
}

export const Title = styled.h2`
  font-size: ${theme.fontSizes[7]};
  color: ${theme.colors.black};
`;

const Wrapper = styled.div`
  padding-left: ${theme.space[6]};
  padding-right: ${theme.space[6]};
  padding-top: ${theme.space[5]};
  padding-bottom: ${theme.space[5]};
  width: 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding-bottom: ${theme.space[3]};
`;

const Step: FunctionComponent<IProps> = ({
  previous,
  next,
  finished,
  title,
  controls = true,
  children,
}) => {
  const shouldRenderControls: boolean = controls;
  const shouldRenderPrevious: boolean = previous > 0;
  const shouldRenderNext: boolean = !finished;

  return (
    <Wrapper>
      <Title>{title}</Title>
      <ContentWrapper>{children}</ContentWrapper>
      {shouldRenderControls && (
        <div>
          {shouldRenderPrevious && (
            <Link href={`/preapproval/${previous}`}>
              <Button>Previous</Button>
            </Link>
          )}

          {shouldRenderNext && (
            <Link href={`/preapproval/${next}`}>
              <Button>Next</Button>
            </Link>
          )}
        </div>
      )}
    </Wrapper>
  );
};

export default Step;
