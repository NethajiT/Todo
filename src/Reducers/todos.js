const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
    console.log(action);
    
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }     
      ]
    
    default:
      return state
      

  }
}

export default todos
