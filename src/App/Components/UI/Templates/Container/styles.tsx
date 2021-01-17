import styled from '@emotion/styled';

import { css } from '@emotion/react';

interface IContainerProps {
  align?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'nowrap';
  direction?:
    | 'row'
    | 'column'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'row-reverse'
    | 'column-reverse';
}

const styleAlign = (align: string): string => {
  switch (align) {
    case 'flex-start':
      return align;
    case 'flex-end':
      return align;
    case 'center':
      return align;
    case 'space-between':
      return align;
    case 'space-around':
      return align;
    case 'nowrap':
      return align;
    default:
      return 'center';
  }
};

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: ${(props) => props && props.direction};
  justify-content: center;

  ${(props) =>
    props && !props.align
      ? css`
          align-items: 'center';
        `
      : css`
          align-items: ${props && props.align && styleAlign(props.align)};
        `}
  width: 50%;
`;
