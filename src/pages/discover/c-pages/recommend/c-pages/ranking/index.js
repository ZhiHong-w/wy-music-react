import React, { memo,useEffect } from 'react';
import {useSelector,useDispatch, shallowEqual,} from 'react-redux';

import WYThemeHeader from '@/components/theme-header';
import WYTopRanking from '@/components/top-ranking';
import { RankingWrapper } from './style';
import { getTopListAction } from '../../store/actionCreators'

export default memo(function WYRanking() {
    const {upRanking,newRanking,originRanking} = useSelector(state=>({
        upRanking: state.getIn(["recommend","upRanking"]),
        newRanking: state.getIn(["recommend","newRanking"]),
        originRanking: state.getIn(["recommend","originRanking"])
    }),shallowEqual)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTopListAction(0));
        dispatch(getTopListAction(2));
        dispatch(getTopListAction(3));
    },[dispatch])

    return (
        <RankingWrapper>
            <WYThemeHeader title="榜单" rightIsPlay={true}></WYThemeHeader>
            <div className="tops">
                <WYTopRanking info={originRanking}></WYTopRanking>
                <WYTopRanking info={upRanking}></WYTopRanking>
                <WYTopRanking info={newRanking}></WYTopRanking>
            </div>
        </RankingWrapper>
    )
})
