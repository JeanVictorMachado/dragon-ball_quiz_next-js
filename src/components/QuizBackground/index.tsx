import { useEffect, useState, useMemo } from 'react'
import Router from 'next/router'

import * as S from './styles'

import Logo from 'components/QuizLogo'
import Widget from 'components/QuizWidget'
import Footer from 'components/Footer'
import QuestionsWidget from 'components/QuestionsWidget'
import Loading from 'components/Loading'
import ResultsWidget from 'components/ResultsWidget'

const QuizBackground = () => {
  const [stateRoute, setRoute] = useState<string>()
  const [stateIsLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const { pathname } = Router

    setRoute(pathname)

    if (pathname === '/quiz' || pathname === '/') {
      setIsLoading(true)

      setTimeout(() => {
        setIsLoading(false)
      }, 1 * 2000)
    }
  }, [stateRoute])

  const currentWidget = useMemo(() => {
    if (stateRoute === '/quiz') {
      return <QuestionsWidget header={true} currentRoute={stateRoute} />
    } else if (stateRoute === '/results') {
      return <ResultsWidget />
    } else {
      return (
        <>
          <Widget
            header={true}
            input={true}
            trueOrFalse={true}
            buttonLink={false}
          />
          <Widget
            header={false}
            input={false}
            trueOrFalse={false}
            buttonLink={true}
          />
        </>
      )
    }
  }, [stateRoute])

  return (
    <>
      {/* {console.log(stateNumberResponseCorrect)} */}
      {stateIsLoading ? (
        <Loading />
      ) : (
        <S.ContainerMain>
          <S.ConatinerLeft>
            <Logo />
            {currentWidget}
            <Footer />
          </S.ConatinerLeft>

          <S.ConatinerRight>
            <S.ImgDragonBall
              src="/img/background-quiz-dragon-ball.png"
              alt="Imagem Dragom Ball"
            />
          </S.ConatinerRight>
        </S.ContainerMain>
      )}
    </>
  )
}

export default QuizBackground
