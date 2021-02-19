import React, {memo} from 'react';
import { useSelector, shallowEqual } from "react-redux";

import { formatMonthDay } from "@/utils/format-utils";

import WYSongOperation from '@/components/song-operation';
import {
  RankingHeaderWrapper
} from './style';

export default memo(function WYRankingHeader() {

  const state = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"]),
  }), shallowEqual);
  const topInfo = state.playList;

  return (
    <RankingHeaderWrapper>
      <div className="image1">
        <img src={topInfo.coverImgUrl} alt="" />
      </div>
      <div className="info">
        <div className="title">{topInfo.name}</div>
        <div className="time">
          <i className="clock sprite-icon2"></i>
          <div>最近更新：{formatMonthDay(topInfo.updateTime)}</div>
          <div className="update-f">（{"每日更新:TODO"}）</div>
        </div>
        <WYSongOperation favorTitle={`(${topInfo.subscribedCount})`}
                            shareTitle={`(${topInfo.shareCount})`}
                            downloadTitle="下载"
                            commentTitle={`(${topInfo.commentCount})`}/>
      </div>
    </RankingHeaderWrapper>
  )
})
