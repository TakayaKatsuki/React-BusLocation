import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Header from './Header'

type Props = {
  children?: ReactNode
  title?: string
}

//全ページ共通のレイアウトコンポーネント
const Layout = ({ children, title = 'のっティバスどこ' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/earlyaccess/roundedmplus1c.css" rel="stylesheet" />

    </Head>
    <Header />
    
    {children}
    {/* { footerもコンポーネント化する} */}
    <footer className='wf-roundedmplus1c mt-auto fixed-bottom jumbotron-fluid bg-light'>
      <hr className='mt-0'/>
      <Container className='d-flex flex-row '>
        <p>©2022 BusStopProject</p>
        <p className='ms-auto'>金沢工業大学</p>
      </Container>
      <span></span>
    </footer>
  </div>
)

export default Layout
