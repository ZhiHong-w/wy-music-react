import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';


import WYThemeHeaderNormal from '@/components/theme-header-normal';
import WYAlphaList from './c-cpns/alpha-list';
import WYArtistItem from './c-cpns/artist-item';
import {
  ArtistListWrapper
} from './style';

export default memo(function WYArtistList() {
  // redux hooks
  const { currentType, artistList } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),
    artistList: state.getIn(["artist", "artistList"])
  }), shallowEqual);

  return (
    <ArtistListWrapper>
      <WYThemeHeaderNormal title={currentType.name} />
      <WYAlphaList/>
      <div className="artist-list">
        {
          artistList.map((item, index) => {
            return <WYArtistItem key={item.id} index={index} info={item}/>
          })
        }
      </div>
    </ArtistListWrapper>
  )
})
