import { createContext } from 'react'

type ContextProps = {
  globalAnswerCorrect: never[]
  globalUserName: string
  setglobalAnswerCorrect: any
  setGlobalUserName: any
}

const ContextAPI = createContext<ContextProps>({} as ContextProps)

export default ContextAPI
