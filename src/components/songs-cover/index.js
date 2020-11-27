import React, { memo } from 'react'

import {
    SongsWrapper
} from './style'
import { 
    getCount,
    changeImageSize 
} from '@/utils/format-utils'

export default memo(function WYSongsCover(props) {
    const { info, right = 0 } = props;
    
    return (
        <SongsWrapper right={right}>
            <div className="cover-top">
                <a title={info.name} href="/#" className="top-pic">
                    <img src={changeImageSize(info.picUrl || info.coverImgUrl,140)} alt=""></img>
                </a>
                <div className="cover sprite-covor">
                    <div className="info sprite-covor">
                        <span>
                            <i className="sprite-icon erji"></i>
                            {getCount(info.playCount)}
                        </span>
                        <a href="/#" className="icon-play"><i className="sprite-icon play"></i></a>
                    </div>
                </div>
            </div>
            <div className="cover-name text-nowrap">
                <a href="/#" className="info">{info.name}</a>
            </div>
            <div className="cover-source text-nowrap">
                by {info.copywriter || info.creator.nickname}
            </div>
        </SongsWrapper>
    )
})
