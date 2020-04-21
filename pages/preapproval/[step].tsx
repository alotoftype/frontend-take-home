import React, { createElement, FunctionComponent } from 'react';
import styled from 'styled-components';
import { NextRouter, useRouter } from 'next/router';

import Sidebar from '../../components/Sidebar';
import theme from '../../theme';
import { IStep } from '../../components/steps/Step';
import WhenToPurchase from '../../components/steps/WhenToPurchase';
import WhereAreYouLooking from '../../components/steps/WhereAreYouLooking';
import WhatTypeOfHome from '../../components/steps/WhatTypeOfHome';
import WhatTypeOfProperty from '../../components/steps/WhatTypeOfProperty';
import CreateAccount from '../../components/steps/CreateAccount';
import WhatIsYourName from '../../components/steps/WhatIsYourName';
import Income from '../../components/steps/Income';
import SomeoneElseOnTheTitle from '../../components/steps/SomeoneElseOnTheTitle';

const SIDEBAR_SIZE = '20%';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

const SidebarWrapper = styled.div`
  position: fixed;
  flex-basis: ${SIDEBAR_SIZE};
  min-height: 100vh;
  color: ${theme.colors.white};
  background-color: ${theme.colors.darkpurple};
  padding: ${theme.space[3]};
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: ${SIDEBAR_SIZE};
`;

type StepIndex = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

const mapStepToComponent: Record<StepIndex, FunctionComponent<IStep>> = {
  '1': WhenToPurchase,
  '2': WhereAreYouLooking,
  '3': WhatTypeOfHome,
  '4': WhatTypeOfProperty,
  '5': CreateAccount,
  '6': WhatIsYourName,
  '7': Income,
  '8': SomeoneElseOnTheTitle,
};

const Index = () => {
  const router: NextRouter = useRouter();
  const { step: _step = '1' } = router.query;
  const step: string = _step.toString();
  const stepAsNumber: number = Number(step);
  const next: number = stepAsNumber + 1;
  const previous: number = stepAsNumber - 1;
  const finished: boolean = stepAsNumber === Object.keys(mapStepToComponent).length;
  const Step: FunctionComponent<IStep> = mapStepToComponent[step];

  return (
    <Wrapper>
      <SidebarWrapper>
        <Sidebar step={step} />
      </SidebarWrapper>

      <ContentWrapper>{createElement(Step, { previous, next, finished })}</ContentWrapper>
    </Wrapper>
  );
};

export default Index;
