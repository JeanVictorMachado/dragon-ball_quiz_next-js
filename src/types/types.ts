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
