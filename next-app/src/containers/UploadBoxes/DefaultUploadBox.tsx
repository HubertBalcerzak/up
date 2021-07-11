import { css } from '@emotion/css'
import React from 'react'

import DefaultUpload from '../../components/blocks/DefaultUploadBox'
import Button from '../../components/elements/Button'
import colorVariants from '../../components/elements/Button/variants/_colorVariants'
import theme from '../../assets/theme'
import LineWithText from '../../components/elements/LineWithText'

const DefaultUploadBox = () => {
  return (
    <DefaultUpload>
      <Button variant='uploadDashed'>Drop file here</Button>
      <LineWithText>OR</LineWithText>
      <Button
        variant='primary'
        colorStates={colorVariants.transparent}
        textProps={{
          className: css`
            color: ${theme.colors.upBase01};
          `
        }}
      >
        Choose file
      </Button>
    </DefaultUpload>
  )
}

export default DefaultUploadBox
