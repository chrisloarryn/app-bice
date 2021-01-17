import React from 'react';

import { Form as FormComponent } from './styles';

export const Form = ({ children, onSubmit }: any) => (
  <FormComponent onSubmit={onSubmit}>{children}</FormComponent>
);
