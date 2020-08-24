import { createStore } from 'redux';
import reducers from "./reducers";

const store = createStore(reducers)

store.subscribe(function(){
    console.log('有更新', store.getState())
})

export default store