import React,{component} from 'react'
import {connect} from 'react-redux'
import { addTodo } from '../Actions'
import Visible from '../Containers/VisibleTodo'
class AddTodo extends React.Component{
    render(){
        let input;
        return(
            <div>
        <form onSubmit={e=>{
            e.preventDefault()
            this.props.dispatch(addTodo(input.value))
            }}>
            <input type='text' ref={v=>{input=v}}/>
            <button type='submit'>Add</button>
            </form>
            <Visible/>
    </div>
        )
    }
}


  
export default connect()(AddTodo)