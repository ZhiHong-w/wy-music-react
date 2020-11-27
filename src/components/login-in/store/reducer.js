import {Map} from 'immutable';
import * as actionType from './constants';

const defaultState = Map({
    loginIsShow: false
});

function reducer(state = defaultState, action){
    switch(action.type){
        case actionType.CHANGE_IS_SHOW:
            return state.set("loginIsShow",action.loginIsShow);
        default:
            return state;
    }
}

export default reducer;