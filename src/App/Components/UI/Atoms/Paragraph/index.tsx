import React from 'react';

import { Paragraph as ParagraphComponent } from './styles';

interface IParagraph {
  description: string
}

/**
 *  MainParagraph 
 *
 * @param {string} description
 * @return {*} <<paragraph>>text<</paragraph>> 
 */
export const Paragraph = ({ description }: IParagraph): JSX.Element => {
  return <ParagraphComponent>{description}</ParagraphComponent>;
};
