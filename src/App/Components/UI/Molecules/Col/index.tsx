// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Col as ColComponent } from './styles';

interface IColProps {
  children?: any;
  style?: React.CSSProperties;
}

export const Col = ({ children, style = {} }: IColProps) => (
  <ColComponent style={style}>{children}</ColComponent>
);
