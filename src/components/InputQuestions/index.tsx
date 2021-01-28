import * as S from './styles'

import { InputQuestionsProps } from 'types/types'

const InputQuestions = ({
  value,
  handlEanswer,
  borderColor
}: InputQuestionsProps) => {
  return (
    <S.Wrapper
      type="button"
      value={value}
      onClick={handlEanswer}
      borderColor={borderColor}
    />
  )
}

export default InputQuestions
