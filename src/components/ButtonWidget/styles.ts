import styled from 'styled-components'

export const Wrapper = styled.input`
  width: 100%;
  height: 35px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.loading};
  box-shadow: 0 0 2px black;
  font-size: 14px;
  font-weight: 800;

  cursor: pointer;
  opacity: 1;

  &:hover {
    transition: 0.5s;
    opacity: 0.7;
  }
`

export const ButtonDisabled = styled.input`
  width: 100%;
  height: 35px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.disabled};
  box-shadow: 0 0 2px black;
  font-size: 14px;
  font-weight: 800;

  cursor: pointer;
  opacity: 1;

  &:hover {
    transition: 0.5s;
    opacity: 0.7;
  }
`
