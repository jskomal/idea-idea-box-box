import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { ideaboxTypes } from './ideaboxTypes'
import { fetchMovies, fetchPhotos, fetchColors, fetchAnimals } from './APIcalls'
import Saved from './components/Saved/Saved'

const App = () => {
  const [currentIdeaboxType, setCurrentIdeaboxType] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [themes, setThemes] = useState([])
  const [currentTheme, setCurrentTheme] = useState(null)
  const [isThemeLocked, setIsThemeLocked] = useState(false)
  const [isTypeLocked, setIsTypeLocked] = useState(false)
  const [savedIdeaboxes, setSavedIdeaboxes] = useState([])

  useEffect(() => {
    getCurrentIdeaboxType(ideaboxTypes)

    Promise.all([fetchMovies(), fetchPhotos(), fetchColors(), fetchAnimals()])
      .then((data) => {
        return data.map((element) => {
          setThemes((prev) => [...prev, element.hasTypes])
        })
      })
      .then(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    if (!isLoading) {
      getRandTheme(themes)
    }
  }, [isLoading])

  const getCurrentIdeaboxType = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length)
    setCurrentIdeaboxType(array[randomIndex])
  }

  const getRandTheme = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length)
    const randomThemeIndex = Math.floor(Math.random() * array[randomIndex].length)
    setCurrentTheme(array[randomIndex][randomThemeIndex])
  }

  const clickRandomize = () => {
    if (!isThemeLocked) {
      getRandTheme(themes)
    }
    if (!isTypeLocked) {
      getCurrentIdeaboxType(ideaboxTypes)
    }
  }

  const clickSave = () => {
    setSavedIdeaboxes((prev) => [
      ...prev,
      { theme: currentTheme, ideaboxType: currentIdeaboxType }
    ])
  }

  return (
    <>
      <NavBar />
      <Route exact path='/'>
        <h1 className='main-title'>Idea Ideabox Box</h1>
        <h2 className='sub-title'>what masterpiece will you make next?</h2>
        <section className='main-view'>
          <article className='ideabox-generator'>
            <div>
              {!isLoading && <h3 className='ideas'>{`A ${currentTheme}-themed`}</h3>}
              <h3 className='ideas'>{currentIdeaboxType}</h3>
            </div>
            <div className='button-pair'>
              <button onClick={() => setIsThemeLocked((prev) => !prev)}>{`${
                isThemeLocked ? 'Unlock Theme' : 'Lock Theme'
              }`}</button>
              <button onClick={() => setIsTypeLocked((prev) => !prev)}>{`${
                isTypeLocked ? 'Unlock Ideabox Type' : 'Lock Ideabox Type'
              }`}</button>
            </div>
            <div className='button-pair'>
              <button onClick={clickRandomize}>Randomize</button>
              <button onClick={clickSave}>Save Ideabox</button>
            </div>
          </article>
        </section>
      </Route>
      <Route exact path='/saved'>
        <Saved savedIdeaboxes={savedIdeaboxes} />
      </Route>
    </>
  )
}

export default App

// hastypes: movies, car, photo, color, animal
