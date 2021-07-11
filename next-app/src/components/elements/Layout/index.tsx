import React from 'react'
import Head from 'next/head'

import Providers from './Providers'

import Page from '../../blocks/Page'

export interface LayoutProps {
  title?: string
}

const Layout: React.FC<LayoutProps> = ({
  title = 'UP | Share your dreams',
  children,
  ...props
}) => (
  <Providers>
    <Head>
      <title>{title}</title>
    </Head>
    <Page>
      <Page.Content {...props} children={children} />
    </Page>
  </Providers>
)

export default Layout
