import React from 'react';

import { Option } from './../Option/styles';

interface IOptionProperties {
  value?: string;
  name?: string;
  image?: string;
  price?: number;
}

interface IOptionProps {
  option: IOptionProperties;
}

export const Options = ({ option }: IOptionProps): JSX.Element => {
  if (!option) return <span>Seleccione</span>;
  return (
    <Option name='insure' value={option.value}>
      {option.name}
    </Option>
  );
};
