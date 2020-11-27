import { Map } from 'immutable';
import * as actionType from './constants';

const defaultState = Map({
    category: [],
    currentCategory: "全部",
    categorySongs: {}
});

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_CATEGORY:
            return state.set("category", action.category);
        case actionType.CHANGE_CURRENT_CATEGORY:
            return state.set("currentCategory", action.currentCategory);
        case actionType.CHANGE_CATEGORY_SONGS:
            return state.set("categorySongs", action.categorySongs);
        default:
            return state;
    }
}

export default reducer;