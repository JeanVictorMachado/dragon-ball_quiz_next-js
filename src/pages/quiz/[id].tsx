import React, { useContext } from 'react'
import ContextAPI from '../../Context/ContextAPI'

import QuizWidget from '../../components/QuizWidget'

export default function QuizDaGaleraPage({ dbExterno }: any) {
  const { setGlobalDbExterno, globalDbExterno } = useContext(ContextAPI)

  setGlobalDbExterno(dbExterno)

  // console.log(globalDbExterno)

  return (
    <>
      <QuizWidget
        input={false}
        dbExterno={dbExterno}
        header={false}
        trueOrFalse={false}
        buttonLink={false}
      />
      {/* <pre>{JSON.stringify(dbExterno, null, 4)}</pre> */}
    </>
  )
}

export async function getServerSideProps(context: any) {
  const dbExterno = await fetch(
    'https://quiz-dragon-ball-immersion-alura-next-js.vercel.app/api/db'
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

  // console.log(dbExterno)

  return {
    props: { dbExterno }
  }
}
