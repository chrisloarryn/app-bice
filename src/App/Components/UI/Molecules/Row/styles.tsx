import React from 'react';
import styled from '@emotion/styled'

interface IRowProperties {
  style?: React.CSSProperties
}

export const Row = styled.div<IRowProperties>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`