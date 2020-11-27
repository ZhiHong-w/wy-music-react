import React, { memo } from 'react'

import { SongOperationWrapper } from './style';

export default memo(function WYSongOperation(props) {
    const { favorTitle, shareTitle, downloadTitle, commentTitle } = props;
    
    return (
        <SongOperationWrapper>
            <span className="play">
                <a href="/#" className="play-icon sprite-button">
                    <span className="play sprite-button">
                        <i className="sprite-button"></i>
                        <span>播放</span>
                    </span>
                </a>
                <a href="/#" className="add-icon sprite-button">+</a>
            </span>
            <a href="/#" className="items sprite-button">
                <i className="icon favor-icon sprite-button">{favorTitle}</i>
            </a>
            <a href="/#" className="items sprite-button">
                <i className="icon share-icon sprite-button">{shareTitle}</i>
            </a>
            <a href="/#" className="items sprite-button">
                <i className="icon download-icon sprite-button">{downloadTitle}</i>
            </a>
            <a href="/#" className="items sprite-button">
                <i className="icon comment-icon sprite-button">{commentTitle}</i>
            </a>
        </SongOperationWrapper>
    )
})
