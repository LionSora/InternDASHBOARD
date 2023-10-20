import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
import Provider from '~/utils/provider'
// import ReactDOM from 'react-dom';
// import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Intern Vstation',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} min-h-screen w-screen`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}