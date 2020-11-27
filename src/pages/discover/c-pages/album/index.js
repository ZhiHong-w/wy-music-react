import React, { memo } from 'react';

import { AlbumWrapper } from './style';
import WYHotAlbum from './cpns/hot-album';
import WYAllNewAlbum from './cpns/all-album'

export default memo(function WYAlbum() {
    return (
        <AlbumWrapper className="wrap-v2">
            <WYHotAlbum></WYHotAlbum>
            <WYAllNewAlbum></WYAllNewAlbum>
        </AlbumWrapper>
    )
})
