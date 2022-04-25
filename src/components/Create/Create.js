import React, { useState } from 'react'

import './Create.css'

const Create = ({ setSavedIdeaboxes }) => {
  const [createdTheme, setCreatedTheme] = useState('')
  const [createdIdeaboxType, setCreatedIdeaboxType] = useState('')
  const [statusMsg, setStatusMsg] = useState('Create an Ideabox!')

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

  const validateInputs = () => {
    if (createdTheme && createdIdeaboxType) {
      return true
    } else {
      setStatusMsg('Please enter both a theme and type to submit')
      return false
    }
  }

  const clickSaveCreated = () => {
    if (validateInputs()) {
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
            data-theme-input
          />
          <input
            type='text'
            name='createdIdeaboxType'
            placeholder='Input an Ideabox Type'
            value={createdIdeaboxType}
            onChange={handleInput}
            data-type-input
          />
          <button data-save-ideabox onClick={clickSaveCreated}>
            save ideabox
          </button>
          <p>{statusMsg}</p>
        </section>
      </div>
    </div>
  )
}

export default Create
