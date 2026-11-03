import { useState } from 'react'
import './App.css'
import Student from './components/Student'
import LoginStatus from './components/LoginStatus'
import Result from './components/Result'
import Product from './components/Product'
import AgeCheck from './components/Agecheck'


function App() {

  return (
    <div>
      <Student />
      <LoginStatus />
      <Result />
      <Product />
      <AgeCheck />

    </div>
  )
}

export default App

