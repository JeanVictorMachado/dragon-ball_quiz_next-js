import React, { useMemo } from 'react'

import * as S from './styles'

import { ButtonWidgetProps } from 'types/types'

const ButtonWidget = ({ trueOrFalse, value, disabled }: ButtonWidgetProps) => {
  const buttonTrueOrFalse = useMemo(() => {
    if (disabled.length < 2) {
      return true
    } else {
      return false
    }
  }, [disabled.length])

  return (
    <>
      {trueOrFalse ? (
        !buttonTrueOrFalse ? (
          <S.Wrapper
            type="submit"
            value={value}
            disabled={buttonTrueOrFalse}
          ></S.Wrapper>
        ) : (
          <S.ButtonDisabled
            type="submit"
            value={value}
            disabled={buttonTrueOrFalse}
          ></S.ButtonDisabled>
        )
      ) : (
        <div></div>
      )}
    </>
  )
}

export default ButtonWidget
