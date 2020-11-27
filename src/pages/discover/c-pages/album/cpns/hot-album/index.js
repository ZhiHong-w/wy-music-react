import React, { memo, useEffect } from 'react';
import { useSelector,useDispatch,shallowEqual} from 'react-redux';

import { getHotAlbumsAction } from '../../store/actionCreators'

import { HotAlbumWrapper } from './style'
import WYAlbumCover from '@/components/album-cover';
import WYThemeHeader from '@/components/theme-header';

export default memo(function WYHotAlbum() {

    const { hotAlbums } = useSelector(state => ({
        hotAlbums: state.getIn(["album", "hotAlbums"])
      }), shallowEqual);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getHotAlbumsAction());
    },[dispatch]);

    return (
        <HotAlbumWrapper>
            <WYThemeHeader title="热门新碟" rightIsPlay={false}></WYThemeHeader>
            <div className="album-list">
                {
                    hotAlbums.slice(0,10).map((item,index)=>{
                        return (
                            <WYAlbumCover size={130} 
                                          width={153} 
                                          bgp={"-845px"}
                                          key={item.id} 
                                          info={item}></WYAlbumCover>
                        )
                    })
                }
            </div>
        </HotAlbumWrapper>
    )
})
