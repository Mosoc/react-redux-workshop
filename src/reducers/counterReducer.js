const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENR':
            return state + 1;
        default:
            return state;
    }
}

export default counterReducer;