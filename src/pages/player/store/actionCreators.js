import {getSongDetail,getLyric} from '@/services/player';
import {getRandom} from '@/utils/math-utils';
import {parseLyric} from '@/utils/parse-lyric'
import * as actionType from './constants';

//改变目前的歌曲
const changeCurrentSongDetailAction = (currentSong) => ({
    type: actionType.CHANGE_CURRENT_SONG,
    currentSong
})

//歌曲位置
const changeCurrentSongIndexAction = (currentSongIndex) => ({
    type: actionType.CHANGE_CURRENT_SONG_INDEX,
    currentSongIndex
})

//播放列表
const changePlayListAction = (playList) => ({
    type: actionType.CHANGE_PLAY_LIST,
    playList
})

//播放方式
export const changeSequenceAction = (sequence) => ({
    type: actionType.CHANGE_SEQUENCE,
    sequence
})


//切换歌曲
export const changeSong = (tag) => {
    return (dispatch,getState) => {
        const playList = getState().getIn(["player","playList"]);
        const sequence = getState().getIn(["player","sequence"]);
        let currentSongIndex = getState().getIn(["player","currentSongIndex"])
        switch(sequence){
            case 1:
                let randomIndex =  getRandom(playList.length);//防止重复一首歌
                while (randomIndex === currentSongIndex) {
                    randomIndex = getRandom(playList.length);
                    //console.log(randomIndex);
                }
                currentSongIndex = randomIndex;
                //console.log(currentSongIndex); 
                break;
            default:
                currentSongIndex = currentSongIndex + tag;
                if(currentSongIndex < 0) currentSongIndex = playList.length - 1;
                if(currentSongIndex >= playList.length) currentSongIndex = 0;
        }
        dispatch(changeCurrentSongDetailAction(playList[currentSongIndex]));
        dispatch(changeCurrentSongIndexAction(currentSongIndex));
        
        dispatch(getLyricAction(playList[currentSongIndex].id))
    }
}

//获取目前的歌曲
export const getSongDetailAction = (ids) => {
    return (dispatch,getState) => {
        //查找是否有这首歌
        const playList = getState().getIn(["player","playList"])
        const songIndex = playList.findIndex(song => song.id === ids);
        
        if(songIndex !== -1){ //歌曲存在
            dispatch(changeCurrentSongIndexAction(songIndex));
            const song = playList[songIndex];
            dispatch(changeCurrentSongDetailAction(song));
            //获取歌词
            dispatch(getLyricAction(song.id))
        } else {//不存在，请求歌曲数据
            getSongDetail(ids).then(res => {
                //console.log(res);
                const song = res.songs && res.songs[0];
                if(!song) return;

                //请求歌曲添加到playList
                const newPlayList = [...playList];
                newPlayList.push(song);
                //更新redux
                dispatch(changePlayListAction(newPlayList));
                //更新索引值
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
                //更新目前的歌曲
                dispatch(changeCurrentSongDetailAction(res.songs[0]))
                //获取歌词
                dispatch(getLyricAction(song.id))
            })
        }


    }
}


//获取歌词
const changeLyricListAction = (lyricList) => ({
    type: actionType.CHANGE_LYRIC_LIST,
    lyricList
})

export const getLyricAction = (id) => {
    return dispatch => {
        getLyric(id).then(res=>{
            const lyric = res.lrc.lyric;
            const lyricList = parseLyric(lyric);
            dispatch(changeLyricListAction(lyricList));
        })
    }

}


//当前歌词
export const changeCurrentLyricIndexAction = (currentLyricIndex) => ({
    type: actionType.CHANGE_CURRENT_LYRIC_INDEX,
    currentLyricIndex
})

//是否展示歌词面板
export const changeIsShowPanelAction = (isShowPanel) => ({
    type: actionType.CHANGE_IS_SHOW_PANEL,
    isShowPanel
})

