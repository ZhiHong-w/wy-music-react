import { combineReducers } from 'redux-immutable';
//import { combineReducers } from 'redux';

import { reducer as recommendReducer} from '../pages/discover/c-pages/recommend/store';
import {reducer as playerReducer} from '../pages/player/store';
import {reducer as loginReducer} from '../components/login-in/store';
import {reducer as albumReducer} from '../pages/discover/c-pages/album/store';
import {reducer as songsReducer} from '../pages/discover/c-pages/songs/store'

const reducer = combineReducers({
    recommend: recommendReducer,
    player: playerReducer,
    login: loginReducer,
    album: albumReducer,
    songs: songsReducer
})

export default reducer;