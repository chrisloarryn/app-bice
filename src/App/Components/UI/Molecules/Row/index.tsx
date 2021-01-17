import React from 'react';

import { Row as RowComponent } from './styles';

interface IRowProps {
  children?: any;
  style?: React.CSSProperties;
}

export const Row = ({ children, style = {} }: IRowProps): JSX.Element => (
  <RowComponent style={style}>{children}</RowComponent>
);
