import React from 'react'

const Note = (props) => {

  return (
    <div className='note'>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button onClick = {()=> props.onDelete(props.key)}>-</button>
    </div>
  )
}

export default Note
