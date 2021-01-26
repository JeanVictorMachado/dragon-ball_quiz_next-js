import styled from 'styled-components'

import { UrlImageProps } from 'types/types'

export const ContainerImg = styled.div<UrlImageProps>`
  width: 100%;
  height: 150px;
  background-image: url(${(props) => props.urlImage});
  background-size: cover;
`
