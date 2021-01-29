import styled from 'styled-components'

export const Wrapper = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 4px;
  margin-top: 8px;
  font-size: 16px;
  padding: 10px;
  background-color: transparent;
  color: white;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`
