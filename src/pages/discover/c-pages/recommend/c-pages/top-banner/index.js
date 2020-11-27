import React, { memo, useEffect,useRef,useState,useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Carousel } from 'antd';

import { getTopBannerAction } from '../../store/actionCreators'

import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from './style'

export default memo(function WYTopBanner() {
    const [currentIndex,setCurrentIndex] = useState(0); 

    const { topBanners } = useSelector(state => ({
        // topBanners: state.get("recommend").get("topBanners")
        topBanners: state.getIn(["recommend", "topBanners"])
    }), shallowEqual);

    const dispatch = useDispatch();
    const carRef = useRef();

    useEffect(() => {
        dispatch(getTopBannerAction());
        //console.log("hello");
    },[dispatch])

    const bannerChange = useCallback(
        (from,to) => {
            setCurrentIndex(to);
        },
        [],
    )
    const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20");

    return (
        <BannerWrapper bgImage={bgImage}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel effect="fade" autoplay={true} ref={carRef} beforeChange={bannerChange}>
                        {
                            topBanners.map((item,index)=>{
                                return (
                                    <div className="banner-item" key={item.imageUrl}>
                                        <img src={item.imageUrl} alt={item.typeTitle} className="image"></img>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={e => carRef.current.prev()}></button>
                    <button className="btn right" onClick={e => carRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})
