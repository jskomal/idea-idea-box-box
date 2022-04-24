import React from 'react'
import './Saved.css'
import { Link } from 'react-router-dom'

const Saved = ({ savedIdeaboxes, clickDelete, clickComplete }) => {
  let cards
  if (savedIdeaboxes) {
    cards = savedIdeaboxes.map((idea) => {
      return (
        <article className='card' key={Date.now() + Math.random()} id={idea.id}>
          <h3 className={`card-text ${idea.isCompleted ? 'completed' : ''}`}>
            A {idea.theme}-themed
          </h3>
          <h3 className={`card-text ${idea.isCompleted ? 'completed' : ''}`}>
            {idea.ideaboxType}
          </h3>

          <button id={idea.id} onClick={clickComplete} disabled={idea.isCompleted}>
            {`${idea.isCompleted ? 'complete!' : 'mark as completed'}`}
          </button>
          <button id={idea.id} onClick={clickDelete}>
            delete ideabox
          </button>
        </article>
      )
    })
  }

  return (
    <div>
      <h1 className='main-title'>Saved Ideaboxes</h1>
      <h2 className='sub-title'>so many ideas, so little time</h2>
      <section className='saved-view'>
        {cards ? (
          cards
        ) : (
          <h1>
            No saved ideas, <Link to='/create'>create one?</Link>
          </h1>
        )}
      </section>
    </div>
  )
}

export default Saved
