import React, { memo, useEffect } from 'react';
import {shallowEqual, useDispatch,useSelector} from 'react-redux'

import WYThemeHeader from '@/components/theme-header';
import WYSongsCover from '@/components/songs-cover';
import {getHotRecommendsAction} from '../../store/actionCreators'
import {
  HotRecommendWrap
} from './style'

export default memo(function WYHotRecommend() {
    
    const { hotRecommends } = useSelector(state=>({
      hotRecommends: state.getIn(["recommend","hotRecommends"])
    }),shallowEqual)

    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(getHotRecommendsAction(8))
    }, [dispatch])

    return (
        <HotRecommendWrap>
           <WYThemeHeader title="热门推荐" keywords={["华语","流行","民谣","摇滚","电子"]} rightIsPlay={true}></WYThemeHeader> 
           <div className="recommend-list">
             {
               hotRecommends.map((item,index)=>{
                return <WYSongsCover info={item} key={item.id}></WYSongsCover>
               })
             }
           </div>
        </HotRecommendWrap>
    )
})
