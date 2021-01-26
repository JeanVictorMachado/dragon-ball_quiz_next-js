import * as S from './styles'

import { InputWidgetProps } from 'types/types'

const InputWidget = ({ display, onChange }: InputWidgetProps) => (
  <>
    {display ? (
      <S.Wrapper
        placeholder="Diz aí seu nome pra jogar :)"
        onChange={({ target: { value } }) => {
          onChange(value)
        }}
      />
    ) : (
      ''
    )}
  </>
)

export default InputWidget
