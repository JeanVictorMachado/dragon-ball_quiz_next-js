import { useContext } from 'react'
import Router from 'next/router'

import ContextAPI from '../../Context/ContextAPI'

import ButtonWidget from '../ButtonWidget'

import { motion } from 'framer-motion'

import * as S from './styles'

const ResultsWidget = () => {
  const { globalAnswerCorrect, globalUserName } = useContext(ContextAPI)

  const handleGetOut = () => {
    Router.push('/')
  }

  return (
    <>
      <S.Container
        as={motion.section}
        transition={{ duration: 1 }}
        variants={{ show: { opacity: 1 }, hidden: { opacity: 0 } }}
        initial="hidden"
        animate="show"
      >
        <S.Content>
          <h2>{globalUserName}</h2>
          <p>
            Acertou {globalAnswerCorrect.length} questões e fez{' '}
            {globalAnswerCorrect.length * 5} pontos{' '}
          </p>
          <ButtonWidget
            disabled={'false'}
            trueOrFalse={true}
            value="Sair"
            onClick={handleGetOut}
          />
        </S.Content>
      </S.Container>
    </>
  )
}

export default ResultsWidget
