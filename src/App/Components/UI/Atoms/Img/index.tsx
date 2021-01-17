import React from 'react';

import { Img as Image } from './styles';

interface IImageProps {
  src?: string;
  alt?: string;
  style?: any;
}

export const Img = ({ src, alt, style = { width: '100%' } }: IImageProps) => (
  <Image src={src} alt={alt} style={style} />
);
