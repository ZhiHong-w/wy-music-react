import React, { memo, useCallback, useEffect,useRef,useState } from 'react';
import { Slider,message } from 'antd';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { NavLink} from 'react-router-dom'

import { 
    changeImageSize,
    formatMinuteSecond,
    getPlaySong
 } from '@/utils/format-utils';
import {
    PlayBarWrapper,
    PlayInfo,
    Control,
    Operator
} from './style';
import { 
    getSongDetailAction,
    changeSequenceAction,
    changeSong,
    changeCurrentLyricIndexAction,
    changeIsShowPanelAction
 } from '../store/actionCreators';
 import WYPlayerPanel from '../app-player-panel'


export default memo(function WYAppPlayerBar() {

    const [currentTime,setCurrentTime] = useState(0);
    const [progress,setProgress] = useState(0);
    const [isChanging,setChanging] = useState(0);
    const [isPlaying,setIsPlaying] = useState(false);
    const { currentSong,
            sequence,
            lyricList,
            currentLyricIndex,
            isShowPanel,
            playList } = useSelector(state => ({
        currentSong: state.getIn(["player", "currentSong"]),
        sequence: state.getIn(["player","sequence"]),
        lyricList: state.getIn(["player","lyricList"]),
        currentLyricIndex: state.getIn(["player","currentLyricIndex"]),
        isShowPanel: state.getIn(["player","isShowPanel"]),
        playList: state.getIn(["player","playList"])
    }), shallowEqual)
    const dispatch = useDispatch();
    const audioRef = useRef();

    useEffect(() => {
        dispatch(getSongDetailAction(167876));
    }, [dispatch])
    useEffect(()=> {
        audioRef.current.src = getPlaySong(currentSong.id);

        audioRef.current.play().then(res =>{
            setIsPlaying(true);
        },err=>{
            setIsPlaying(false);
        })
    },[currentSong])

    const picUrl = (currentSong.al && currentSong.al.picUrl) || " ";
    const singerName = (currentSong.ar && currentSong.ar[0].name) || " ";
    const totalTime = currentSong.dt || 0;

    const playMusic = useCallback(() => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    },[isPlaying]);

    const timeUpdate = (e) => {
        const cTime = e.target.currentTime;
        if(!isChanging){
            setCurrentTime(cTime*1000);
            setProgress(cTime*1000 / totalTime * 100);
        }

        let i = 0;
        for(; i<lyricList.length; i++){
            let lyricItem = lyricList[i];
            if(cTime*1000 < lyricItem.time){
                break;            
            }
        }
         //展示歌词
        if( (i-1) !== currentLyricIndex){
            dispatch(changeCurrentLyricIndexAction(i-1));
            const content = lyricList[i-1] && lyricList[i-1].content;
            if(content && isPlaying){
                message.open({
                    content: content,
                    duration: 0,
                    key: "lyric",
                    className: "lyric-class"
                })
            }
            
        }
    };

    const sliderChange = useCallback((value) => {
        setChanging(1);
        setCurrentTime(value / 100 * totalTime);
        setProgress(value);
    },[totalTime]);

    const sliderAfterChange = useCallback((value)=>{
        const nowTime = value / 100 * totalTime / 1000;
        audioRef.current.currentTime = nowTime;//秒
        setCurrentTime(nowTime*1000);//毫秒
        setChanging(0);

        if(!isPlaying){
            playMusic();
        }
    },[totalTime,isPlaying,playMusic]);

    const changeSequence = useCallback(() => {
        const currentSequence = (sequence + 1) % 3;
        dispatch(changeSequenceAction(currentSequence));
    }, [dispatch,sequence]);

    const changeMusic = (tag) => {
        dispatch(changeSong(tag));
    };

    const handleMusicEnded = () =>{
        if(sequence === 2){
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        } else {
            dispatch(changeSong(1));
        }
    }

    const changeShowPanel = () => {
        dispatch(changeIsShowPanelAction(!isShowPanel));
    }

    return (
        <PlayBarWrapper className="sprite-player">
            <div className="content wrap-v2">
                <Control isPlaying={isPlaying}>
                    <button className="sprite-player prev" 
                            title="上一首"
                            onClick={e => changeMusic(-1)}></button>
                    <button className="sprite-player play" 
                            title="播放/暂停" 
                            onClick={e => playMusic()}></button>
                    <button className="sprite-player next" 
                            title="下一首"
                            onClick={e => changeMusic(1)}></button>
                </Control>
                <PlayInfo>
                    <div className="image">
                        <NavLink to="/discover/player">
                            <img src={changeImageSize(picUrl, 35)} alt=""></img>
                        </NavLink>
                    </div>
                    <div className="info">
                        <div className="song">
                            <a href="/#" className="song-name">{currentSong.name}</a>
                            <a href="/#" className="singer-name">{singerName}</a>
                        </div>
                        <div className="progress">
                            <Slider defaultValue={30} 
                                    value={progress} 
                                    tipFormatter={null} 
                                    onChange={sliderChange} 
                                    onAfterChange={sliderAfterChange}/>
                            <div className="time">
                                <span className="now-time">{formatMinuteSecond(currentTime)}</span>
                                <span className="divider">/</span>
                                <span className="total-time">{formatMinuteSecond(totalTime)}</span>
                            </div>
                        </div>
                    </div>

                </PlayInfo>
                <Operator sequence={sequence}>
                    <div className="left">
                        <button className="sprite-player btn favor" title="收藏"></button>
                        <button className="sprite-player btn share" title="分享"></button>
                    </div>
                    <div className="right sprite-player">
                        <button className="sprite-player btn volume"></button>
                        <button className="sprite-player btn loop" 
                                title="循环"
                                onClick={e => changeSequence() }></button>
                        <button className="sprite-player btn playlist" 
                                title="播放列表" onClick={e => changeShowPanel()}>
                            {playList.length}
                        </button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} 
                   onTimeUpdate={timeUpdate}
                   onEnded={e => handleMusicEnded() }></audio>
            { isShowPanel && <WYPlayerPanel />}
        </PlayBarWrapper>
    )
})
