import React from 'react'
import './Saved.css'

const Saved = ({ savedIdeaboxes }) => {
  let cards
  if (savedIdeaboxes[0]) {
    cards = savedIdeaboxes.map((idea) => {
      return (
        <article className='card' key={Date.now() + Math.random()}>
          <h3>A {idea.theme}-themed</h3>
          <h3>{idea.ideaboxType}</h3>

          <button>mark as completed</button>
          <button>delete ideabox</button>
        </article>
      )
    })
  }

  return (
    <div>
      <h1 className='main-title'>Saved Ideaboxes</h1>
      <h2 className='sub-title'>so many ideas, so little time</h2>
      <section className='saved-view'>{cards}</section>
    </div>
  )
}

export default Saved
