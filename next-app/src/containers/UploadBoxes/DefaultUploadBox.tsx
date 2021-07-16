import { css } from '@emotion/css'
import React from 'react'

import DefaultUpload from '../../components/blocks/DefaultUploadBox'
import Button from '../../components/elements/Button'
import colorVariants from '../../components/elements/Button/variants/_colorVariants'
import theme from '../../assets/theme'
import LineWithText from '../../components/elements/LineWithText'
import DesktopContainer from '../../components/elements/DesktopContainer'
import MobileContainer from '../../components/elements/MobileContainer'

const DefaultUploadBox = () => {
  return (
    <>
      <DesktopContainer breakpoint={theme.breakpoints.sm}>
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
      </DesktopContainer>
      <MobileContainer breakpoint={theme.breakpoints.sm}>
        <DefaultUpload>
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
      </MobileContainer>
    </>
  )
}

export default DefaultUploadBox
