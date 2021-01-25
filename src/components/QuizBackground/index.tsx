import * as S from './styles'

import Logo from 'components/QuizLogo'
import Widget from 'components/QuizWidget'
import Footer from 'components/Footer'

const QuizBackground = () => (
  <S.ContainerMain>
    <S.ConatinerLeft>
      <Logo />
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
      <Footer />
    </S.ConatinerLeft>

    <S.ConatinerRight>
      <S.ImgDragonBall
        src="/img/background-quiz-dragon-ball.png"
        alt="Imagem Dragom Ball"
      />
    </S.ConatinerRight>
  </S.ContainerMain>
)

export default QuizBackground
