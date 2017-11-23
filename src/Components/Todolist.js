import React from 'react'
import PropTypes from 'prop-types'


const Show = ({id,text }) => (
  <li>
   {id} {text}
    
  </li>
)

const ShowList = ({ todos}) => (
  <ul>
    {todos.map(todo =>
      <Show key={todo.id}
        {...todo}     
  />
    )}
  </ul>
)



export default ShowList
