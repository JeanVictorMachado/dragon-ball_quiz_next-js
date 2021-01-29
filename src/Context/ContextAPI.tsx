import { createContext } from 'react'

type ContextProps = {
  globalAnswerCorrect: never[]
  globalUserName: string
  setglobalAnswerCorrect: any
  setGlobalUserName: any
  globalDbExterno: any
  setGlobalDbExterno: any
}

const ContextAPI = createContext<ContextProps>({} as ContextProps)

export default ContextAPI
