import React from 'react'

export default function QuizDaGaleraPage() {
  return <div>Desafio da próxima aula junto com as animações</div>
}

export async function getServerSideProps(context: any) {
  // console.log('infos next', context.query.id)

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

  console.log(dbExterno)

  return {
    props: {}
  }
}
