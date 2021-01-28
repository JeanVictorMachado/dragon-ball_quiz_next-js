import { useState, useEffect, useContext } from 'react'
import Router from 'next/router'

import * as S from './styles'

import ContextAPI from '../../Context/ContextAPI'
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
  const [currentIndexQuestion, setCurrentIndexQuestion] = useState<number>()

  const { globalAnswerCorrect, setglobalAnswerCorrect } = useContext(ContextAPI)

  const handleSubmit = (eventReload: React.FormEvent<HTMLFormElement>) => {
    eventReload.preventDefault()

    setClassNameButtonAnswer(colorButtonAnswer)

    const indexAnswer = db.questions[indexQuestion].answer

    if (indexAnswer === currentIndexQuestion) {
      setglobalAnswerCorrect([...globalAnswerCorrect, true])
    }

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
    // setglobalAnswerCorrect(numberResponseCorrect)
  }, [indexQuestion])

  const handlEanswer = (indexQueston: number, alternative: string) => {
    const indexAnswer = db.questions[indexQuestion].answer

    setCurrentIndexQuestion(indexQueston)
    setNameAlternative(alternative)

    if (indexAnswer === indexQueston) {
      setColorButtonAnswer('green')
    } else {
      setColorButtonAnswer('red')
    }
  }

  return (
    <S.Container>
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
              <div key={index}>
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
              </div>
            )
          )}
          <ButtonWidget
            value="CONFIRMAR"
            trueOrFalse={true}
            disabled="false"
            onClick=""
          />
        </S.Content>
      </S.Form>
    </S.Container>
  )
}

export default QuestionsWidget
