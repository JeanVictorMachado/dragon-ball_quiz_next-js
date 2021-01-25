import * as S from './styles'

import { InputWidgetProps } from 'types/types'

const InputWidget = ({ display }: InputWidgetProps) => (
  <>{display ? <S.Wrapper placeholder="Diz aí seu nome pra jogar :)" /> : ''}</>
)

export default InputWidget
