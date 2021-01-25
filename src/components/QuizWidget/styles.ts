import styled from 'styled-components'

export const Container = styled.section`
  width: 400px;
  height: 250px;
  margin-top: 5px;
  margin-bottom: 15px;
  padding: 0;

  border-radius: 10px;
  box-shadow: 0 0 10px black;

  background-color: '';
`

export const Content = styled.section`
  padding: 0 30px;

  > h2 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 18px;
    color: white;
  }

  > p {
    color: white;
    font-size: 16px;
    opacity: 0.8;
    margin-bottom: 10px;
  }
`
