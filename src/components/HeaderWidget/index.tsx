import * as S from './styles'

import { HeaderWidgetProps } from 'types/types'

const HeaderWidget = ({ header }: HeaderWidgetProps) => {
  return (
    <>
      {header ? (
        <S.Wrapper>
          <h3>Quiz - Dragon Ball Super</h3>
        </S.Wrapper>
      ) : (
        ''
      )}
    </>
  )
}

export default HeaderWidget
