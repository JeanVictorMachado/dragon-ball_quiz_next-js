import { useEffect, useState, useMemo } from 'react'
import Router from 'next/router'

import * as S from './styles'

import Logo from 'components/QuizLogo'
import Widget from 'components/QuizWidget'
import Footer from 'components/Footer'
import QuestionsWidget from 'components/QuestionsWidget'
import Loading from 'components/Loading'
import ResultsWidget from 'components/ResultsWidget'

const QuizBackground = ({ dbExterno }: any) => {
  const [stateRoute, setRoute] = useState<string>()
  const [stateIsLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const { pathname } = Router

    setRoute(pathname)

    if (
      pathname === '/quiz' ||
      pathname === '/' ||
      pathname === '/home/[id]' ||
      pathname === '/quiz/[id]'
    ) {
      setIsLoading(true)

      setTimeout(() => {
        setIsLoading(false)
      }, 1 * 2000)
    }
  }, [stateRoute])

  const currentWidget = useMemo(() => {
    if (stateRoute === '/quiz' || stateRoute === '/quiz/[id]') {
      return (
        <QuestionsWidget
          header={true}
          currentRoute={stateRoute}
          dbExterno={dbExterno}
        />
      )
    } else if (stateRoute === '/results' || stateRoute === '/results/[id]') {
      return <ResultsWidget />
    } else {
      return (
        <>
          <Widget
            dbExterno={dbExterno}
            header={true}
            input={true}
            trueOrFalse={true}
            buttonLink={false}
          />
          <Widget
            dbExterno={dbExterno}
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
            {console.log(dbExterno)}
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
