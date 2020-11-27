import React, { memo ,useState} from 'react';
import { useSelector,shallowEqual } from 'react-redux';

import { changeImageSize } from '@/utils/format-utils'
import {
    PlayerInfoWrapper,
    PlayerInfoLeft,
    PlayerInfoRight
} from './style';
import WYSongOperation from '@/components/song-operation';

export default memo(function WYPlayerInfo() {

    const [isSpread,setIsSpread] = useState(false);



    const { currentSong, lyricList } = useSelector(state => ({
        currentSong: state.getIn(["player", "currentSong"]),
        lyricList: state.getIn(["player", "lyricList"])
    }),shallowEqual)

    const totalLyrics = isSpread ? lyricList.length : 13;

    return (
        <PlayerInfoWrapper>
            <PlayerInfoLeft>
                <div className="image">
                    <img className="photo" src={changeImageSize(currentSong.al.picUrl, 130)} alt="" />
                    <span className="cover image-cover"></span>
                </div>
                <div className="link">
                    <i className="sprite-icon2"></i>
                    <a href="#/">生成外联播放器</a>
                </div>
            </PlayerInfoLeft>
            <PlayerInfoRight isSpread={isSpread}>
                <div className="header">
                    <i className="sprite-icon2"></i>
                    <h3 className="title">{currentSong.name}</h3>
                </div>
                <div className="singer">
                    <span className="label">歌手：</span>
                    <a href="/#" className="name">{currentSong.ar[0].name}</a>
                </div>
                <div className="album">
                    <span className="label">所属专辑：</span>
                    <a href="/#" className="name">{currentSong.al.name}</a>
                </div>

                <WYSongOperation favorTitle="收藏"
                    shareTitle="分享"
                    downloadTitle="下载"
                    commentTitle="(167366)" />

                <div className="lyric">
                    <div className="lyric-info">
                        {
                            lyricList.slice(0, totalLyrics).map((item, index) => {
                                return <p key={item.time} className="text">{item.content}</p>
                            })
                        }
                    </div>
                    <button className="lyric-control"
                        onClick={e => setIsSpread(!isSpread)}>
                        {isSpread ? "收起" : "展开"}
                        <i className="sprite-icon2"></i>
                    </button>
                </div>
            </PlayerInfoRight>
        </PlayerInfoWrapper>
    )
})
