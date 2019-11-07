import { combineReducers } from 'redux';
import  playReducer from './play'
import galleryReducer from './gallery'

export default combineReducers({
    play: playReducer,
    gallery: galleryReducer
})