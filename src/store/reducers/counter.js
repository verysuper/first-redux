
function counter(state = 0, action){
    switch( action.type ){
        case "add":
            return state +1;
        default:
            return state;
    }
}

export default counter