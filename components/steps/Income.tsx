import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import Step, { IStep } from './Step';
import CollapsibleForm from '../CollapsibleForm';
import theme from '../../theme';

const Label = styled.label`
  display: flex;
  padding: ${theme.space[2]} 0;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const Sum = styled.div`
  width: 100%;
  padding: ${theme.space[2]} 0;
  text-align: right;
  font-weight: ${theme.fontWeights.semibold};
  font-size: ${theme.fontSizes[4]};
`;

const computeIncomeSum: (data: Record<string, string>) => number = (data) =>
  Object.values(data)
    .map(Number)
    .reduce((accumulator, current) => accumulator + current, 0);

const Income: FunctionComponent<IStep> = (props) => {
  const [data, setData] = useState<Record<string, string>>({});
  const [sum, setSum] = useState<number>(0);
  const [sumFormatted, setSumFormatted] = useState<string>('');

  const onChange: (group: Record<string, string>) => void = (group) =>
    setData({ ...data, ...group });

  useEffect(() => {
    setSum(computeIncomeSum(data));
  }, [data]);

  useEffect(() => {
    setSumFormatted(sum.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
  }, [sum]);

  return (
    <Step title={'Tell us about your income'} {...props}>
      <CollapsibleForm title={'Salary'} onChange={onChange}>
        <Label>
          Total cash balances
          <input type={'number'} name={'totalCashBalances'} placeholder={'0'} />
        </Label>

        <Label>
          Overtime, commissions, bonuses
          <input type={'number'} name={'overtimeComissionsBonuses'} placeholder={'0'} />
        </Label>

        <Label>
          Annual restricted stock unit (RSU) grand value
          <input type={'number'} name={'annualStockUnit'} placeholder={'0'} />
        </Label>
      </CollapsibleForm>

      <CollapsibleForm title={'Self employment'} onChange={onChange}>
        <Label>
          Total share of profits (as-on last year’s taxes)
          <input type={'number'} name={'totalShareProfits'} placeholder={'0'} />
        </Label>
      </CollapsibleForm>

      <CollapsibleForm title={'Social security, pension, or disability'} onChange={onChange}>
        <Label>
          Total income
          <input type={'number'} name={'totalSSN'} placeholder={'0'} />
        </Label>
      </CollapsibleForm>

      <CollapsibleForm title={'Other'} onChange={onChange}>
        <Label>
          Monthly child support
          <input type={'number'} name={'monthlyChildSupport'} placeholder={'0'} />
        </Label>

        <Label>
          Monthly alimony
          <input type={'number'} name={'monthlyAlimony'} placeholder={'0'} />
        </Label>

        <Label>
          Airbnb income from past 24 months
          <input type={'number'} name={'airbnbIncome'} placeholder={'0'} />
        </Label>

        <Label>
          Annual other income
          <input type={'number'} name={'annualOtherIncome'} placeholder={'0'} />
        </Label>
      </CollapsibleForm>

      <Sum>Total {sumFormatted}</Sum>
    </Step>
  );
};

export default Income;
