import * as S from './styles'

type ImgQuestionsProps = {
  urlImage: string
}

const ImgQuestions = ({ urlImage }: ImgQuestionsProps) => (
  <S.ContainerImg urlImage={urlImage} />
)

export default ImgQuestions
