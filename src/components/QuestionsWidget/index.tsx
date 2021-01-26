import * as S from './styles'

import HeaderWidget from 'components/HeaderWidget'
import ImgQuestions from 'components/ImgQuestions'
import InputQuestions from 'components/InputQuestions'
import ButtonWidget from 'components/ButtonWidget'

import { QuestionsWidgetProps } from 'types/types'

const QuestionsWidget = ({ header, currentRoute }: QuestionsWidgetProps) => (
  <S.Container>
    <HeaderWidget
      header={header}
      label={`<  Pergunta 1 de 5`}
      currentRoute={currentRoute}
    />
    <ImgQuestions />
    <S.Content>
      <>
        <h2>Tema geral</h2>
        <p>Em que ano foi lançado o primeiro episódio de Dragon Ball Super?</p>
      </>
      <InputQuestions value="2005" />
      <InputQuestions value="2009" />
      <InputQuestions value="2010" />
      <InputQuestions value="2012" />
      <ButtonWidget value="CONFIRMAR" trueOrFalse={true} disabled={false} />
    </S.Content>
  </S.Container>
)

export default QuestionsWidget
