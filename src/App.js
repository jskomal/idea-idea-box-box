import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'

const App = () => {
  useEffect(() => {
    const fetchOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_XKEY
      }
    }
    console.log('hi')
  }, [])

  return (
    <>
      <NavBar />
      <Route exact path='/'>
        <h1 className='main-title'>Idea Ideabox Box</h1>
      </Route>
    </>
  )
}

export default App

// hastypes: movies, car, photo, color, animal
