import { createStore } from 'redux';
import counter from "./reducers";

const store = createStore(counter)

store.subscribe(function(){
    console.log('有更新', store.getState())
})

export default store