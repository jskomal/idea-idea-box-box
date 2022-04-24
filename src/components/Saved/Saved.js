import React from 'react'
import './Saved.css'
import { Link } from 'react-router-dom'

const Saved = ({ savedIdeaboxes, clickDelete }) => {
  let cards
  if (savedIdeaboxes[0]) {
    cards = savedIdeaboxes.map((idea) => {
      return (
        <article className='card' key={Date.now() + Math.random()} id={idea.id}>
          <h3 className='card-text'>A {idea.theme}-themed</h3>
          <h3 className='card-text'>{idea.ideaboxType}</h3>

          <button>mark as completed</button>
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
