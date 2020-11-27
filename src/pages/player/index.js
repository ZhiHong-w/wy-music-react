import React, { memo } from 'react';

import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style';
import WYPlayerInfo from './cpns/player-info';
import WYPlayerComment from './cpns/player-comment';
import WYPlayerSongs from './cpns/player-songs';
import WYPlayerRelevant from './cpns/player-relevant';

export default memo(function WYPlayer() {
    return (
        <PlayerWrapper>
            <div className="main-content wrap-v2">
                <PlayerLeft>
                    <WYPlayerInfo></WYPlayerInfo>
                    <WYPlayerComment></WYPlayerComment>
                </PlayerLeft>
                <PlayerRight>
                    <WYPlayerSongs></WYPlayerSongs>
                    <WYPlayerRelevant></WYPlayerRelevant>
                </PlayerRight>
            </div>
        </PlayerWrapper>
    )
})
