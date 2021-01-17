import styled from '@emotion/styled'

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  padding: 8px 32px;
  width: 113px;
  height: 48px;
  background: #1f61f7;
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
`;
