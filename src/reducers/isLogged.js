const loggedReducer = (state = false, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
        case 'SIGN_IN':
            return !state;
        default:
            return false;
    }
}

export default loggedReducer;
// exporting default means we can give any name to it while importing this
