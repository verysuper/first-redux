import { createStore } from 'redux';

function counter(state = 0, action){
    switch( action.type ){
        case "add":
            return state +1;
        default:
            return state;
    }
}
const store = createStore(counter)

store.subscribe(function(){
    console.log('有更新', store.getState())
})

export default store