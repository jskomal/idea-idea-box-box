import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { ideaboxTypes } from './ideaboxTypes'
import { fetchMovies, fetchPhotos, fetchColors, fetchAnimals } from './APIcalls'
import Saved from './components/Saved/Saved'
import Create from './components/Create/Create'

const App = () => {
  const [currentIdeaboxType, setCurrentIdeaboxType] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [themes, setThemes] = useState([])
  const [currentTheme, setCurrentTheme] = useState(null)
  const [isThemeLocked, setIsThemeLocked] = useState(false)
  const [isTypeLocked, setIsTypeLocked] = useState(false)
  const [savedIdeaboxes, setSavedIdeaboxes] = useState([])
  const [errorMsg, setErrorMsg] = useState('Try saving an ideabox!')

  useEffect(() => {
    getCurrentIdeaboxType(ideaboxTypes)

    Promise.all([fetchMovies(), fetchPhotos(), fetchColors(), fetchAnimals()])
      .then((data) => {
        return data.map((element) => {
          setThemes((prev) => [...prev, element.hasTypes])
          return element
        })
      })
      .then(() =>
        setSavedIdeaboxes(() => {
          const retrieved = localStorage.getItem('savedIdeaboxes')
          if (retrieved) {
            const parsed = JSON.parse(retrieved)
            setSavedIdeaboxes(parsed)
          }
        })
      )
      .then(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    if (!isLoading) {
      getRandTheme(themes)
    }
  }, [isLoading])

  useEffect(() => {
    if (savedIdeaboxes) {
      localStorage.setItem('savedIdeaboxes', JSON.stringify(savedIdeaboxes))
    }
  }, [savedIdeaboxes])

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
    setSavedIdeaboxes((prev) => {
      if (prev) {
        if (
          !prev.some(
            (idea) =>
              idea.theme === currentTheme && idea.ideaboxType === currentIdeaboxType
          )
        ) {
          setErrorMsg('Saved ideabox!')
          return [
            ...prev,
            {
              theme: currentTheme,
              ideaboxType: currentIdeaboxType,
              id: Date.now(),
              isCompleted: false
            }
          ]
        } else {
          setErrorMsg("Can't save a duplicate ideabox, generate a new idea!")
          return [...prev]
        }
      } else {
        setSavedIdeaboxes([
          {
            theme: currentTheme,
            ideaboxType: currentIdeaboxType,
            id: Date.now(),
            isCompleted: false
          }
        ])
      }
    })
  }

  const clickDelete = (e) => {
    e.preventDefault()
    setSavedIdeaboxes((prev) => {
      return prev.filter((idea) => idea.id !== parseInt(e.target.id))
    })
  }

  const clickComplete = (e) => {
    e.preventDefault()
    setSavedIdeaboxes((prev) => {
      const completed = prev.find((idea) => idea.id === parseInt(e.target.id))
      completed.isCompleted = true
      return [...prev]
    })
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
              <button
                id='lockTheme'
                onClick={() => setIsThemeLocked((prev) => !prev)}
              >{`${isThemeLocked ? 'Unlock Theme' : 'Lock Theme'}`}</button>
              <button id='lockType' onClick={() => setIsTypeLocked((prev) => !prev)}>{`${
                isTypeLocked ? 'Unlock Ideabox Type' : 'Lock Ideabox Type'
              }`}</button>
            </div>
            <div className='button-pair'>
              <button id='clickRandomize' onClick={clickRandomize}>
                Randomize
              </button>
              <button id='clickSave' onClick={clickSave}>
                Save Ideabox
              </button>
            </div>
            <p>{errorMsg}</p>
          </article>
        </section>
      </Route>
      <Route exact path='/saved'>
        <Saved
          savedIdeaboxes={savedIdeaboxes}
          clickDelete={clickDelete}
          clickComplete={clickComplete}
        />
      </Route>
      <Route exact path='/create'>
        <Create setSavedIdeaboxes={setSavedIdeaboxes} />
      </Route>
    </>
  )
}

export default App
