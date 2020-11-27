import React, { memo,useCallback } from 'react';
import { useDispatch} from 'react-redux';

import { changeImageSize } from '@/utils/format-utils';
import { getSongDetailAction } from '@/pages/player/store';

import { TopRankingWraper } from './style';

export default memo(function WYTopRanking(props) {
    const { info } = props;
    const { tracks = [] } = info;

    const dispatch = useDispatch();

    const playMusic = useCallback((item) => {
        dispatch(getSongDetailAction(item.id))
    },[dispatch]);

    return (
        <TopRankingWraper>
            <div className="header">
                <div className="image">
                    <img src={changeImageSize(info.coverImgUrl, 80)} alt="" />
                    <a href="/#" className="image-cover" title={info.name}> </a>
                </div>
                <div className="info">
                    <a href="/#" title={info.name}>{info.name}</a>
                    <div>
                        <a href="/#" title="播放" className="btn play sprite-02"> </a>
                        <a href="/#" title="收藏" className="btn favor sprite-02"> </a>
                    </div>
                </div>
            </div>
            <div className="body">
                {
                    tracks.slice(0, 10).map((item, index) => {
                        return (
                            <div key={item.id} className="body-item">
                                <div className="rank">{index + 1}</div>
                                <div className="play-music">
                                    <a href="/#"className="music-name" title={item.name}>{item.name}</a>
                                    <div className="operate">
                                        <a href="/#" title="播放" 
                                           className="bn play sprite-02"
                                           onClick={e =>playMusic(item)}> </a>
                                        <a href="/#" title="添加到播放列表" className="bn sprite-icon2 addto"> </a>
                                        <a href="/#" title="收藏" className="bn favor sprite-02"> </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="footer">
                <a href="/#">查看全部&gt;</a>
            </div>
        </TopRankingWraper>
    )
})
