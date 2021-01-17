import styled from '@emotion/styled'

interface IInsureProp {
  name?: string
  value?: any
}

export const Option = styled.option<IInsureProp>`
  margin-left: auto;
`