import * as React from 'react';
import Footer from './Footer';
import NavBar from './Navbar';

import Head from 'next/head';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
    <Head>
        <link rel="shortcut icon" href="/images/favicon.ico"/>
        <title>PokeNext</title>
    </Head>
      <NavBar />
      <main className='main-container'>{children}</main>
      <Footer />
    </>
  );
}
