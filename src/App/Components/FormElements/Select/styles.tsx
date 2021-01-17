import styled from '@emotion/styled'

interface ISelectProps {
  name?: string | any
}

export const Select = styled.select<ISelectProps>`
  display: flex;
  background: #FFFFFF;
  border-radius: 10px;
  border: 1px solid #DDE3ED;
  box-sizing: border-box;
  border-radius: 4px;
  width: 200px;
  height: 50px;
  outline-color: rgba(62, 92, 17, 0.8)
`

export const Div = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Label = styled.label`
  font-family: Poppins;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #AFBACC;
`

