import React, { memo } from 'react';

import { changeImageSize } from '@/utils/format-utils';

import { ItemWrapper } from './style';

export default memo(function WYArtistItemV1(props) {
  const { info, index } = props;

  return (
    <ItemWrapper>
      {
        index < 10 && (
          <div className="image">
            <img src={changeImageSize(info.img1v1Url, 130)} alt="" />
          </div>
        )
      }
      <div className="info">
        <span className="name">{info.name}</span>
        <i className="sprite_icon2 icon"></i>
      </div>
    </ItemWrapper>
  )
})
