import { connect } from 'react-redux'
//import { t } from '../actions'
import List from '../Components/Todolist'



const mapStateToProps = (state) => ({ 
  todos: state.todos
})

const VisibleList = connect(
  mapStateToProps
)(List)

export default VisibleList
