import React, { FunctionComponent, ReactNode, RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import theme from '../theme';

interface IProps {
  onChange?: (data: Record<string, string>) => void;
  children: ReactNode;
  title: string;
}

const Wrapper = styled.div`
  padding: ${theme.space[2]} 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Toggle = styled.label`
  cursor: pointer;
`;

const Title = styled.span`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes[5]};
  font-weight: ${theme.fontWeights.bold};
  user-select: none;
`;

const CollapsibleForm: FunctionComponent<IProps> = ({ title, children, onChange = Function() }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const form: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);

  useEffect(() => {
    onChange(formData);
  }, [formData]);

  return (
    <Wrapper>
      <Toggle>
        <input
          type={'checkbox'}
          checked={collapsed}
          onChange={() => setCollapsed(!collapsed)}
          data-testid={'collapsible-form-toggle'}
        />
        <Title>{title}</Title>
      </Toggle>

      {collapsed && (
        <form
          data-testid={'collapsible-form'}
          ref={form}
          onChange={() => {
            const rawFormData: FormData = new FormData(form.current);
            let nextFormData = {};
            for (const [key, value = 0] of rawFormData.entries()) {
              nextFormData[key] = value;
            }

            setFormData({ ...formData, ...nextFormData });
          }}
        >
          {children}
        </form>
      )}
    </Wrapper>
  );
};

export default CollapsibleForm;
