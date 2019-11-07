let initialState = {
    comic : [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_COMIC" : {
            return {...state, comic: action.comic}
        }
        default: {
            return state
        }
    }
}