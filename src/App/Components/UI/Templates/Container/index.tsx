import React from 'react';

import { Container as ContainerComponent } from './styles';

interface IContainerProps {
  css?: any;
  children?: any;
  align?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'nowrap';
  style?: React.CSSProperties;
  direction?:
    | 'row'
    | 'column'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'row-reverse'
    | 'column-reverse';
}

/**
 * ContainerComponent
 *
 * @param {IContainerProps} {
 *   children,
 *   align = 'flex-end' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'nowrap';
 *   style = {},
 *   direction = 'row' | 'column' | 'inherit' | 'initial' | 'revert' | 'row-reverse' | 'column-reverse';
 * }
 */
export const Container = ({
  children,
  align = 'flex-end',
  style = {},
  direction = 'column'
}: IContainerProps) => (
  <ContainerComponent align={align} direction={direction} style={style}>
    {children}
  </ContainerComponent>
);
