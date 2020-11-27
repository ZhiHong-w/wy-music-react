import * as actionType from './constants';
import {
    getHotAlbums,
    getTopAlbums
} from '@/services/album';


//热门新碟
const changeHotAlbumsAction = (res) => ({
    type: actionType.CHANGE_HOT_ALBUMS,
    hotAlbums: res.albums
})

export const getHotAlbumsAction = () => {
    return dispatch => {
        getHotAlbums().then(res => {
            dispatch(changeHotAlbumsAction(res));
        })
    }
}

//全部新碟
const changeTopAlbumAction = (res) => ({
    type: actionType.CHANGE_TOP_ALBUMS,
    topAlbums: res.albums
})

const changeTopTotalAction = (res) => ({
    type: actionType.CHANGE_TOP_TOTAL,
    total: res.total
})

export const getTopAlbumsAction = (page) => {
    return dispatch => {
        getTopAlbums(35, (page - 1) * 35).then(res => {
            dispatch(changeTopAlbumAction(res));
            dispatch(changeTopTotalAction(res));
           // console.log(res.total);
        })
    }
}