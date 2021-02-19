import React, { memo,useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getTopListDispatch } from './store/actionCreators';

import WYSumRanking from './c-pages/sum-ranking';
import WYRankingHeader from './c-pages/ranking-header';
import WYRankingList from './c-pages/ranking-list';

import { 
    WYRankingWrapper,
    WYRankingLeft,
    WYRankingRight
 } from './style';

export default memo(function WYRanking() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopListDispatch());
    }, [dispatch])

    return (
        <WYRankingWrapper className="wrap-v2">
            <WYRankingLeft>
                <WYSumRanking></WYSumRanking>
            </WYRankingLeft>
            <WYRankingRight>
                <WYRankingHeader></WYRankingHeader>
                <WYRankingList></WYRankingList>
            </WYRankingRight>
        </WYRankingWrapper>
    )
})
