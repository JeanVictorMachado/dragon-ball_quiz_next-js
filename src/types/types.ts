export type ButtonLinkProps = {
  buttonLink: boolean
  value: string
}

export type ButtonWidgetProps = {
  trueOrFalse: boolean
  disabled: string
  value: string
}

export type HeaderWidgetProps = {
  header: boolean
  label: string
  currentRoute: string
}

export type InputWidgetProps = {
  display: boolean
  onChange: React.Dispatch<React.SetStateAction<string>>
}

export type WidgetProps = {
  header: boolean
  input: boolean
  trueOrFalse: boolean
  buttonLink: boolean
}

export type UrlImageProps = {
  urlImage: string
}

export type WrapperHeader = {
  currentRoute: string
}

export type QuestionsWidgetProps = {
  header: boolean
  currentRoute: string
}

export type InputQuestionsProps = {
  value: string
  onClick: any
  borderColor: unknown
  handlEanswer: {
    indexQuestion: any
    alternative: any
  }
}
