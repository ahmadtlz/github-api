import Head from 'next/head'
import dynamic from 'next/dynamic'
import {useRouter} from 'next/router'

import {Container} from '@chakra-ui/react'
export default function Layout({
  title,
  keywords,
  description,
  children,
  ...props
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1 "
        />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Container h={'100%'} {...props}>
        {children}
      </Container>
    </>
  )
}

Layout.defaultProps = {
  title: ' Github  ',
  description: 'search to find user in github',
  keywords: 'github, search,find , ',
}
