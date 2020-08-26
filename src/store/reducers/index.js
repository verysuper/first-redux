import counter from "./counter";
import user from "./user";
import { combineReducers } from 'redux'

//***將reducer指定給store中的state
export default combineReducers({
    counter:counter,
    user:user
})