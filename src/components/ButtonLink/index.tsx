import * as S from './styles'

import { ButtonLinkProps } from 'types/types'

const ButtonLink = ({ buttonLink, value, href }: ButtonLinkProps) => {
  return (
    <S.WrapperLink href={href}>
      {buttonLink ? <S.Wrapper type="button" value={value}></S.Wrapper> : ''}
    </S.WrapperLink>
  )
}

export default ButtonLink
