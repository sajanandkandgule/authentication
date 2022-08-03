import {createStore , combineReducers , applyMiddleware} from "redux"
import notesReducer from "../components/reducer/noteReducer"
import thunk from 'redux-thunk'
const  ConfigureStore = () =>{
    const store = createStore(combineReducers({
        notes:notesReducer
    }),applyMiddleware(thunk))
    return store
}
export default ConfigureStore