import { useState, useEffect } from 'react'
import Router from 'next/router'

import * as S from './styles'

import HeaderWidget from 'components/HeaderWidget'
import ImgQuestions from 'components/ImgQuestions'
import InputQuestions from 'components/InputQuestions'
import ButtonWidget from 'components/ButtonWidget'
import db from '../../../db.json'

import { QuestionsWidgetProps } from 'types/types'

const QuestionsWidget = ({ header, currentRoute }: QuestionsWidgetProps) => {
  const [indexQuestion, setIndexQuestion] = useState(0)
  const [colorButtonAnswer, setColorButtonAnswer] = useState('')
  const [classNameButtonAnswer, setClassNameButtonAnswer] = useState<unknown>()
  const [nameAlternative, setNameAlternative] = useState<string>()

  const handleSubmit = (eventReload: React.FormEvent<HTMLFormElement>) => {
    eventReload.preventDefault()

    setClassNameButtonAnswer(colorButtonAnswer)

    setTimeout(() => {
      if (indexQuestion >= db.questions.length - 1) {
        Router.push('/results')
      } else {
        setIndexQuestion(indexQuestion + 1)
      }
    }, 1 * 800)
  }

  useEffect(() => {
    setClassNameButtonAnswer(null)
  }, [indexQuestion])

  const handlEanswer = (indexQueston, alternative) => {
    const indexAnswer = db.questions[indexQuestion].answer

    setNameAlternative(alternative)

    if (indexAnswer === indexQueston) {
      setColorButtonAnswer('green')
    } else {
      setColorButtonAnswer('red')
    }
  }

  return (
    <S.Container>
      {console.log(nameAlternative)}
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
          {db.questions[indexQuestion].alternatives.map(
            (alternative, index) => (
              <>
                {classNameButtonAnswer ? (
                  <InputQuestions
                    borderColor={
                      nameAlternative === alternative && classNameButtonAnswer
                    }
                    key={alternative}
                    value={alternative}
                    handlEanswer={() => handlEanswer(index + 1, alternative)}
                  />
                ) : (
                  <InputQuestions
                    borderColor="none"
                    key={alternative}
                    value={alternative}
                    handlEanswer={() => handlEanswer(index + 1, alternative)}
                  />
                )}
              </>
            )
          )}
          <ButtonWidget value="CONFIRMAR" trueOrFalse={true} disabled="false" />
        </S.Content>
      </S.Form>
    </S.Container>
  )
}

export default QuestionsWidget
