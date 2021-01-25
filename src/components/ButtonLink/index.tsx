import * as S from './styles'

import { ButtonLinkProps } from 'types/types'

const ButtonLink = ({ buttonLink, value }: ButtonLinkProps) => (
  <>{buttonLink ? <S.Wrapper type="button" value={value}></S.Wrapper> : ''}</>
)

export default ButtonLink
