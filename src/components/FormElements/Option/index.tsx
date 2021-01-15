import React from 'react';

import { Option } from './../Option/styles';

export const Options = ({ option }: any) => {
  if (!option) return <span>Seleccione</span>
  return (
    <Option name='insure' value={option.value}>
      {option.name}
    </Option>
  )
};
