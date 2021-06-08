import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/templates/Header'
import GlobalStyles from './GlobalStyles'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
      </BrowserRouter>
    </>
  )
}

export default App
