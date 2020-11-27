import React, { memo} from 'react';

import WYTopBanner from './c-pages/top-banner';
import WYHotRecommend from './c-pages/hot-recommend';
import WYNewAlbum from './c-pages/new-album';
import WYRanking from './c-pages/ranking';

import {
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight
} from './style'

function WYRecommend(props) {

    return (
        <RecommendWrapper>
            <WYTopBanner></WYTopBanner>
            <Content className="wrap-v2">
                <RecommendLeft>
                    <WYHotRecommend></WYHotRecommend>
                    <WYNewAlbum></WYNewAlbum>
                    <WYRanking></WYRanking>
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}

// const mapStateToProps = state =>({
//     topBanners: state.recommend.topBanners
// });

// const mapDispatchToProps = dispatch => ({
//     getBanners: ()=>{
//         // dispatch(getTopBannerAction());
//         dispatch(getTopBannerAction);
//     }
// });

// export default connect(mapStateToProps,mapDispatchToProps)(memo(WYRecommend))
export default memo(WYRecommend);
