import React, { useState } from 'react'

import './Create.css'

const Create = ({ setSavedIdeaboxes }) => {
  const [createdTheme, setCreatedTheme] = useState('')
  const [createdIdeaboxType, setCreatedIdeaboxType] = useState('')
  const [statusMsg, setStatusMsg] = useState('Create an Idea')

  const handleInput = (e) => {
    if (e.target.name === 'createdTheme') {
      setCreatedTheme(e.target.value)
    } else if (e.target.name === 'createdIdeaboxType') {
      setCreatedIdeaboxType(e.target.value)
    }
  }

  const clearInputs = () => {
    setCreatedTheme('')
    setCreatedIdeaboxType('')
  }

  const clickSaveCreated = () => {
    setSavedIdeaboxes((prev) => {
      if (prev) {
        if (
          !prev.some(
            (idea) =>
              idea.theme === createdTheme && idea.ideaboxType === createdIdeaboxType
          )
        ) {
          setStatusMsg('Saved ideabox!')
          return [
            ...prev,
            {
              theme: createdTheme,
              ideaboxType: createdIdeaboxType,
              id: Date.now(),
              isCompleted: false
            }
          ]
        } else {
          setStatusMsg("Can't save a duplicate ideabox, generate a new idea!")
          return [...prev]
        }
      } else {
        return [
          {
            theme: createdTheme,
            ideaboxType: createdIdeaboxType,
            id: Date.now(),
            isCompleted: false
          }
        ]
      }
    })
    clearInputs()
  }

  return (
    <div>
      <h1 className='main-title'>Create your own Ideabox</h1>
      <h2 className='sub-title'>why are you even here?</h2>
      <div className='create-view'>
        <section className='form'>
          <input
            type='text'
            name='createdTheme'
            placeholder='Input a theme'
            value={createdTheme}
            onChange={handleInput}
          />
          <input
            type='text'
            name='createdIdeaboxType'
            placeholder='Input an Ideabox Type'
            value={createdIdeaboxType}
            onChange={handleInput}
          />
          <button onClick={clickSaveCreated}>save ideabox</button>
          <p>{statusMsg}</p>
        </section>
      </div>
    </div>
  )
}

export default Create