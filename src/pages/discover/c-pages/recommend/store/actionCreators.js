import * as actionTypes from './constants';

import { 
    getTopBanners,
    getHotRecommends,
    getNewAlbum,
    getTopList
 } from '@/services/recommend';

const changeTopBannersAction = (banners) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners:banners
})

export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeTopBannersAction(res.banners))
            // console.log(res);
        })
    }
    // getTopBanners().then(res=>{
    //     dispatch(changeTopBannersAction(res.banners));
    // })
}

export const changeHotRecommendsAction = (hotRecommends) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends:hotRecommends
})

export const getHotRecommendsAction = (limit)=>{
    return dispatch => {
        getHotRecommends(limit).then(res => {
            //console.log(res);
            dispatch(changeHotRecommendsAction(res.result))
        })
    }
}

export const changeNewAlbumAction = (newAlbum) => ({
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbum:newAlbum
})

export const getNewAlbumAction = (limit) => {
    return dispatch => {
        getNewAlbum(limit).then(res=>{
            //console.log(res);
            dispatch(changeNewAlbumAction(res.albums))
        })
    }
}

export const changeUpRanking = (res) => ({
    type: actionTypes.CHANGE_UP_RANKING,
    upRanking: res.playlist
})
export const changeNewRanking = (res) => ({
    type: actionTypes.CHANGE_NEW_RANKING,
    newRanking: res.playlist
})
export const changeOriginRanking = (res) => ({
    type: actionTypes.CHANGE_ORIGIN_RANKING,
    originRanking: res.playlist
})

export const getTopListAction = (idx) => {
    return dispatch => {
        getTopList(idx).then(res=>{
            //console.log(res.playlist);
            switch(idx) {
                case 0:
                    dispatch(changeUpRanking(res));
                    break;
                case 2:
                    dispatch(changeNewRanking(res));
                    break;
                case 3:
                    dispatch(changeOriginRanking(res));
                    break;
                default:
                    break;
            }
        })
    }
}