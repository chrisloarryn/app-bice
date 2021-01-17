import React from 'react'
import styled from '@emotion/styled'

interface IColProperties {
  style?: React.CSSProperties;
}

export const Col = styled.div<IColProperties>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`