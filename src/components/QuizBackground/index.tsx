import { useEffect, useState } from 'react'
import Router from 'next/router'

import * as S from './styles'

import Logo from 'components/QuizLogo'
import Widget from 'components/QuizWidget'
import Footer from 'components/Footer'
import QuestionsWidget from 'components/QuestionsWidget'
import Loading from 'components/Loading'

const QuizBackground = () => {
  const [stateRoute, setRoute] = useState<string>()
  const [stateIsLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const { pathname } = Router

    setRoute(pathname)

    if (pathname === '/quiz') {
      setIsLoading(true)

      setTimeout(() => {
        setIsLoading(false)
      }, 1 * 800)
    }
  }, [stateRoute])

  return (
    <>
      {stateIsLoading ? (
        <Loading />
      ) : (
        <S.ContainerMain>
          {console.log(stateIsLoading)}
          <S.ConatinerLeft>
            <Logo />
            {stateRoute === '/quiz' ? (
              <QuestionsWidget header={true} currentRoute={stateRoute} />
            ) : (
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
            )}
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
