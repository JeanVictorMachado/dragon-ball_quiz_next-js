import * as S from './styles'

import { InputQuestionsProps } from 'types/types'

const InputQuestions = ({ value }: InputQuestionsProps) => (
  <S.Wrapper type="button" value={value} />
)

export default InputQuestions
