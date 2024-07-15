import React from 'react'
import HomePage from '../components/HomePage'
import LogInPage from '../components/LogInPage'
import Router, { Route } from '../components/Router'
import SignUpPage from '../components/SignUpPage'

function App() {
  return (
    <Router>
      <Route path="/log-in">
        <LogInPage />
      </Route>

      <Route path="/sign-up">
        <SignUpPage />
      </Route>
      
      <Route path="/">
        <HomePage />
      </Route>
    </Router>
  )
}

export default App
