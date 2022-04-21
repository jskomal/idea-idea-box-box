import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { ideaboxTypes } from './ideaboxTypes'

const App = () => {
  const [randIdeaboxType, setrandIdeaboxType] = useState(null)

  useEffect(() => {
    getRandIdeaboxType(ideaboxTypes)

    const fetchOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_XKEY
      }
    }
    console.log('hi')
  }, [])

  const getRandIdeaboxType = (array) => {
    let randomIndex = Math.floor(Math.random() * array.length)
    setrandIdeaboxType(array[randomIndex])
  }

  return (
    <>
      <NavBar />
      <Route exact path='/'>
        <h1 className='main-title'>Idea Ideabox Box</h1>
        <h2 className='sub-title'>what masterpiece will you make next?</h2>
        <section className='main-view'>
          <article className='ideabox-generator'>
            <h3>{`A THEME-themed`}</h3>
            <h3>{randIdeaboxType}</h3>
            <div className='button-pair'>
              <button>Lock Theme</button>
              <button>Lock Ideabox Type</button>
            </div>
            <div className='button-pair'>
              <button>Randomize</button>
              <button>Save Ideabox</button>
            </div>
          </article>
        </section>
      </Route>
    </>
  )
}

export default App

// hastypes: movies, car, photo, color, animal
