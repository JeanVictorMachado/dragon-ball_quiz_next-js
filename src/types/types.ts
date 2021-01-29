export type ButtonLinkProps = {
  buttonLink: boolean
  value: any
  href: string
}

export type ButtonWidgetProps = {
  trueOrFalse: boolean
  disabled: string
  value: string
  onClick: any
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
  dbExterno: any
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
  borderColor: unknown
  handlEanswer: unknown
}
