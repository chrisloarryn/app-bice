import React from 'react';

import { H1, H2, H3, H4 } from './styles';

interface ITitleProps {
  children?: React.ReactChild;
  className?: any;
  size?: 'h1' | 'h2' | 'h3' | 'h4';
  style?: React.CSSProperties;
}

const TitleContainer = ({ children, className, size, style }: ITitleProps) => {
  switch (size) {
    case 'h1':
      return (
        <H1 className={className} style={style}>
          {children}
        </H1>
      );
    case 'h2':
      return (
        <H2 className={className} style={style}>
          {children}
        </H2>
      );
    case 'h3':
      return (
        <H3 className={className} style={style}>
          {children}
        </H3>
      );
    case 'h4':
      return (
        <H4 className={className} style={style}>
          {children}
        </H4>
      );
    default:
      return (
        <H1 className={className} style={style}>
          {children}
        </H1>
      );
  }
};

export const Title = ({
  children,
  className,
  size = 'h1',
  style = {}
}: ITitleProps) => (
  <TitleContainer className={className} size={size} style={style}>
    {children}
  </TitleContainer>
);
