import { useState } from 'react'
import ContextAPI from './ContextAPI'

const Provider = ({ children }: any) => {
  const [globalAnswerCorrect, setglobalAnswerCorrect] = useState([])
  const [globalUserName, setGlobalUserName] = useState<string>('')

  const contextState = {
    globalAnswerCorrect,
    setglobalAnswerCorrect,
    globalUserName,
    setGlobalUserName
  }

  return (
    <ContextAPI.Provider value={contextState}>{children}</ContextAPI.Provider>
  )
}

export default Provider
