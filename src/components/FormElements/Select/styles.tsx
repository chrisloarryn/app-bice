import styled from 'styled-components'

export const Select = styled.select`
  display: flex;
  background: #FFFFFF;
  border: 1px solid #DDE3ED;
  box-sizing: border-box;
  border-radius: 4px;
  width: 200px;
  height: 50px;
  outline-color: lime
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

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  padding: 8px 32px;
  width: 113px;
  height: 48px;
  background: #1F61F7;
  box-shadow: 0px 10px 16px rgba(18, 25, 84, 0.07);
  border-radius: 1000px;
  color: bisque;
  font-size: 15px;
  margin-top: 4px;
  &:hover {
    cursor: pointer !important;
  }
  &:focus {
    border: none !important;
  }
`