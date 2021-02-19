import * as actionTypes from './constants';

import { getTopList,getRankingList} from '@/services/ranking';
 //import { getTopList,getRankingList} from '../../../../../services/ranking';

const changeTopListAction = (topList) => ({
    type: actionTypes.CHANGE_TOP_LIST,
    topList
})

export const getTopListDispatch = () => {
    return async dispatch => {
        const res = await getTopList();
        dispatch(changeTopListAction(res.list));
    }
}


const changePlayListAction = (playList) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList
})

export const getRankingDispatch = (id) => {
    return async dispatch => {
        const res = await getRankingList(id);
        dispatch(changePlayListAction(res.playlist))
    }
}


export const changeCurrentIndex = (currentIndex) => ({
    type: actionTypes.CHANGE_CURRENT_INDEX,
    currentIndex
})
