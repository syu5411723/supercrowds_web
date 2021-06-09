import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/templates/Header'
import GlobalStyles from './GlobalStyles'
import Router from './router/Router'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
