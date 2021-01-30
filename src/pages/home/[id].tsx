import QuizBackground from '../../components/QuizBackground'

import { ThemeProvider } from 'styled-components'

import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export default function QuizDaGaleraPage({
  dbExterno
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // console.log(useRouter())

  return (
    <>
      <ThemeProvider theme={dbExterno.theme}>
        <QuizBackground dbExterno={dbExterno} />
      </ThemeProvider>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const [githubUser, projectName] = context.query.id.split('___')

  // console.log()

  const dbExterno = await fetch(
    `https://${projectName}.${githubUser}.vercel.app/api/db`
  )
    .then((resServer) => {
      if (resServer.ok) {
        return resServer.json()
      }
      throw new Error('Falha ao pegar os dados!')
    })
    .then((resServerJson) => {
      return resServerJson
    })
    .catch((error) => {
      console.error(error)
    })

  return {
    props: { dbExterno }
  }
}
