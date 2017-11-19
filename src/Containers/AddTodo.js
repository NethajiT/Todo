import React,{component} from 'react'
import {connect} from 'react-redux'
import { addTodo } from '../Actions'


let AddTodo=({dispatch})=>{
    let input;
return(
    <div>
        <form onSubmit={e=>{
            e.preventDefault()
            dispatch(addTodo(input.value))
            console.log(input.value)
            }}>
            <input type='text' ref={v=>{input=v}}/>
            <button type='submit'>Add</button>
            </form>
    </div>
)
}
AddTodo = connect()(AddTodo)
export default AddTodo