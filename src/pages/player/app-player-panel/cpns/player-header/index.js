import React, { memo } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import {
    PlayerHeaderWrapper,
    PlayerHeaderLeft,
    PlayerHeaderRight
} from './style';
import { changeIsShowPanelAction } from '../../../store/actionCreators';

export default memo(function WYPlayerHeader() {

    const { currentSong, playList, isShowPanel } = useSelector(state => ({
        currentSong: state.getIn(["player", "currentSong"]),
        playList: state.getIn(["player", "playList"]),
        isShowPanel: state.getIn(["player", "isShowPanel"])
    }), shallowEqual);
    const dispatch = useDispatch();

    const changeShowPanel = () => {
        dispatch(changeIsShowPanelAction(!isShowPanel));
    }

    return (
        <PlayerHeaderWrapper>
            <PlayerHeaderLeft>
                <h3>播放列表({playList.length})</h3>
                <div className="operator">
                    <button>
                        <i className="sprite-playlist icon favor"></i>
                        收藏全部
                    </button>
                    <button>
                        <i className="sprite-playlist icon remove"></i>
                        清除
                    </button>
                </div>
            </PlayerHeaderLeft>
            <PlayerHeaderRight>
                <div className="songname">{currentSong.name}</div>
                <div className="sprite-playlist disopen" onClick={e => changeShowPanel()}>x</div>
            </PlayerHeaderRight>
        </PlayerHeaderWrapper>
    )
})
