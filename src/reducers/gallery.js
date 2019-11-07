let initialState = {
    fullGallery: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_WINNER" : {
            return {...state, fullGallery: [...state.fullGallery, action.fullGallery]}
        }
        default: {
            return state
        }
    }
}