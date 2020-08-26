import { createStore } from 'redux';
import reducers from "./reducers";

//創建一個倉庫,且必須放入reducer
const store = createStore(reducers)

//只是觀察store的state用
store.subscribe(function(){
    console.log('有更新', store.getState())
})

export default store