import { useState } from 'react'

import * as S from './styles'

import HeaderWidget from 'components/HeaderWidget'
import ImgQuestions from 'components/ImgQuestions'
import InputQuestions from 'components/InputQuestions'
import ButtonWidget from 'components/ButtonWidget'
import db from '../../../db.json'

import { QuestionsWidgetProps } from 'types/types'

const QuestionsWidget = ({ header, currentRoute }: QuestionsWidgetProps) => {
  const [indexQuestion, setIndexQuestion] = useState(0)

  const handleSubmit = (eventReload: React.FormEvent<HTMLFormElement>) => {
    eventReload.preventDefault()

    setIndexQuestion(indexQuestion + 1)
  }

  return (
    <S.Container>
      {console.log(db)}
      <HeaderWidget
        header={header}
        label={`<  Pergunta 1 de 5`}
        currentRoute={currentRoute}
      />
      <S.Form onSubmit={(event) => handleSubmit(event)}>
        <ImgQuestions urlImage={String(db.questions[indexQuestion].image)} />
        <S.Content>
          <>
            <h2>{db.questions[indexQuestion].title}</h2>
            <p>{db.questions[indexQuestion].description}</p>
          </>
          {db.questions[indexQuestion].alternatives.map((alternative) => (
            <InputQuestions key={alternative} value={alternative} />
          ))}
          <ButtonWidget value="CONFIRMAR" trueOrFalse={true} disabled="false" />
        </S.Content>
      </S.Form>
    </S.Container>
  )
}

export default QuestionsWidget
