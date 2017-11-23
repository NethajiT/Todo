let addId=0;
export const addTodo=(text)=>{
    
    return{
    type:'ADD_TASK',
    id: addId ++,
    text
}
}