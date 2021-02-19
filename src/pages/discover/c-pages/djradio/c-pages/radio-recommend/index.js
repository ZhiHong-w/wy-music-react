import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { 
  getRadioRecommend
} from "../../store/actionCreators";

import WYThemeHeaderNormal from '@/components/theme-header-normal';
import WYRadioRecomendCover from '@/components/radio-recommend-cover';
import {
  RecommendWrapper
} from "./style";

export default memo(function WYRadioRecommend() {
  // redux
  const { currentId, recommends } = useSelector(state => ({
    currentId: state.getIn(["djradio", "currentId"]),
    recommends: state.getIn(["djradio", "recommends"])
  }), shallowEqual);
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    if (currentId === 0) return;
    dispatch(getRadioRecommend(currentId));
  }, [dispatch, currentId])

  return (
    <RecommendWrapper>
      <WYThemeHeaderNormal title="优秀新电台" />
      <div className="radio-list">
        {
          recommends.slice(0, 5).map((item) => {
            return (<WYRadioRecomendCover info={item} key={item.id}/>)
          })
        }
      </div>
    </RecommendWrapper>
  )
})
