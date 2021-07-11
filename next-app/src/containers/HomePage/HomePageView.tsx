import React from 'react'

import { IHomePageProps } from '../../pages'
import { IHomePageStateProps } from './useHomePage'

import HomePage from '../../components/blocks/HomePage'

interface IHomePageViewProps extends IHomePageProps, IHomePageStateProps {}

const HomePageView = ({}: IHomePageViewProps) => <HomePage />

export default HomePageView
