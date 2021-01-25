import * as S from './styles'

import { ButtonWidgetProps } from 'types/types'

const ButtonWidget = ({ trueOrFalse, value }: ButtonWidgetProps) => (
  <>{trueOrFalse ? <S.Wrapper type="button" value={value}></S.Wrapper> : ''}</>
)

export default ButtonWidget
