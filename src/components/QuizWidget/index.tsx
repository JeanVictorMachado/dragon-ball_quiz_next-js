import { useState, useContext } from 'react'
import { useRouter } from 'next/router'

import * as S from './styles'

import ContextAPI from '../../Context/ContextAPI'
import InputWidget from 'components/InputWidget'
import HeaderWidget from 'components/HeaderWidget'
import ButtonWidget from 'components/ButtonWidget'
import ButtonLink from 'components/ButtonLink'
import db from '../../../db.json'

import { motion } from 'framer-motion'

import { WidgetProps } from 'types/types'

const Widget = ({
  header,
  input,
  trueOrFalse,
  buttonLink,
  dbExterno
}: WidgetProps) => {
  const [stateForm, setStateForm] = useState('')
  const { setGlobalUserName } = useContext(ContextAPI)
  const router = useRouter()

  const handleSubmit = (eventReload: React.FormEvent<HTMLFormElement>) => {
    eventReload.preventDefault()

    setGlobalUserName(stateForm)

    if (!router.query.id) {
      router.push(`/quiz?name=${stateForm}`)
    } else {
      router.push(`/quiz/${router.query.id}`)
    }
  }

  console.log(router.query.id)

  return (
    <S.Container
      as={motion.section}
      transition={{ duration: 1 }}
      variants={{ show: { opacity: 1 }, hidden: { opacity: 0 } }}
      initial="hidden"
      animate="show"
    >
      <HeaderWidget
        currentRoute=""
        header={header}
        label={!router.query.id ? db.title : dbExterno.title}
      />
      <S.Content>
        {header ? (
          <p>{!router.query.id ? db.description : dbExterno.title}</p>
        ) : (
          <>
            <h2>Quizes da galera</h2>
            <p>
              Dá uma olhada nesses quises incriveis que o pessoal da Imersão
              AluraNextJS fez:
            </p>
          </>
        )}
        <S.Form
          onSubmit={(event) => {
            handleSubmit(event)
          }}
        >
          <InputWidget display={input} onChange={setStateForm} />
          <ButtonWidget
            value={
              stateForm === ''
                ? 'JOGAR'
                : `Vamos lá ${stateForm}!`.toUpperCase()
            }
            trueOrFalse={trueOrFalse}
            disabled={stateForm}
            onClick={() => ''}
          />
        </S.Form>
        {!router.query.id
          ? db.external.map((linkGuys, index) => {
              const [projectName, gitHubName] = linkGuys
                .replace(/\//g, '')
                .replace('https:', '')
                .replace('.vercel.app', '')
                .split('.')
              return (
                <ButtonLink
                  href={`/home/${gitHubName}___${projectName}`}
                  buttonLink={buttonLink}
                  value={`${gitHubName}/${projectName}`}
                  key={`${index}-${linkGuys}`}
                />
              )
            })
          : dbExterno.external.map((linkGuys: string, index: number) => {
              const [projectName, gitHubName] = linkGuys
                .replace(/\//g, '')
                .replace('https:', '')
                .replace('.vercel.app', '')
                .split('.')
              return (
                <ButtonLink
                  href={`/home/${gitHubName}___${projectName}`}
                  buttonLink={buttonLink}
                  value={`${gitHubName}/${projectName}`}
                  key={`${index}-${linkGuys}`}
                />
              )
            })}
      </S.Content>
    </S.Container>
  )
}

export default Widget
