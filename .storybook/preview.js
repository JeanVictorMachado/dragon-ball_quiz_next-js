import GlobalStytes from '../src/styles/global'

export const decorators = [
  (Story) => (
    <>
      <GlobalStytes />
      <Story />
    </>
  )
]
