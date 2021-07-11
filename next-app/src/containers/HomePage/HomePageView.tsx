import React from 'react'

import { IHomePageProps } from '../../pages'
import { IHomePageStateProps } from './useHomePage'

import HomePage from '../../components/blocks/HomePage'
import Container from '../../components/elements/Container'
import Box from '../../components/blocks/Box'
import image from '../../../public/images/mainImage.jpg'

interface IHomePageViewProps extends IHomePageProps, IHomePageStateProps {}

const HomePageView = ({}: IHomePageViewProps) => (
  <HomePage>
    <Container>
      <Box>
        <Box.Content>
          <Box.Image src={image} alt='Simple landscape' />
        </Box.Content>
        <Box.TransparentBar>
          <div></div>
          <div></div>
          <Box.BackgroundBox />
        </Box.TransparentBar>
      </Box>
    </Container>
  </HomePage>
)

export default HomePageView
