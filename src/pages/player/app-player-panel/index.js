import React, { memo } from 'react';

import { PanelWrapper } from './style';
import WYPlayerHeader from './cpns/player-header';
import WYLyricPanel from './cpns/lyric-panel';
import WYPlayerList from './cpns/player-list';

export default memo(function WYPlayerPanel() {
    return (
        <PanelWrapper>
            <WYPlayerHeader></WYPlayerHeader>
            <div className="main">
                <img className="image" src="https://music.163.com/api/img/blur/109951165424435214" alt="" />
                <WYPlayerList></WYPlayerList>
                <WYLyricPanel></WYLyricPanel>
            </div>
        </PanelWrapper>
    )
})
