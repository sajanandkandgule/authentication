const notesInitialState = []

const notesReducer = (state = notesInitialState , action) =>{
    switch(action.type){
          case 'ADD_NOTE' : {
            return [{...action.payload} , ...state]
          }
          case 'GET_NOTE' : {
            return [...action.payload]
          }
          case "DELETE_NOTE" : {
            return state.filter((ele)=>{
               return ele._id !==action.payload
            })
          }
        default:{
            return state
        }
    }
}
export default notesReducer