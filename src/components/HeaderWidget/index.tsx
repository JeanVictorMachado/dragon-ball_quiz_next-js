import * as S from './styles'

import { HeaderWidgetProps } from 'types/types'

const HeaderWidget = ({ header, label, currentRoute }: HeaderWidgetProps) => {
  return (
    <>
      {header ? (
        <S.Wrapper currentRoute={currentRoute}>
          <h3>{label}</h3>
        </S.Wrapper>
      ) : (
        ''
      )}
    </>
  )
}

export default HeaderWidget
