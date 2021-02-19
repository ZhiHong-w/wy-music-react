import React, { memo } from 'react';

import WYArtistCategory from './c-pages/artist-category';
import WYArtistList from './c-pages/artist-list';

import { WYArtistWrapper } from './style';

export default memo(function WYArtist() {
  return (
    <WYArtistWrapper>
      <div className="content1 wrap-v2">
        <WYArtistCategory/>
        <WYArtistList/>
      </div>
    </WYArtistWrapper>
  )
})
