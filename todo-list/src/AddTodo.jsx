import React, { useReducer } from 'react'
import { ADD_TODO, REMOVE_TODO, initial, todoReducer } from './toDo'
import { v4 as uuidv4 } from 'uuid'

export default function AddTodo() {
  const [state, dispatch] = useReducer(todoReducer, initial)

  function handleSubmit(event) {
    event.preventDefault()
    const inputValue = event.target.elements[0].value
    dispatch({ type: ADD_TODO, payload: inputValue })
    event.target.reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add something to do =>" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {state.todos.map((item) => (
          <li
            key={item.id}
            onClick={() => dispatch({ type: REMOVE_TODO, payload: item.id })}
          >
            {item.title} <button>remove</button>
          </li>
        ))}
      </ul>
    </>
  )
}
