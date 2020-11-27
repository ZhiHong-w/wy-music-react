/**
 * 单独的专辑框封装组件
 */

import React, { memo } from 'react';

import { AlbumCoverWrapper } from './style'
import { changeImageSize } from '@/utils/format-utils'

export default memo(function WYAlbumCover(props) {

    const { info, size = 130, width = 153, bgp = "-845px" } = props;
    return (
        <AlbumCoverWrapper size={size} width={width} bgp={bgp}>
            <div className="album-image">
                <img src={changeImageSize(info.picUrl, size) } className="alimg" alt="" />
                <a href="/#" className="cov image-cover" title={info.name}> </a>
                <i className="sprite-icon play" />
            </div>
            <div className="album-info">
                <a className="name text-nowrap" href="/#">{info.name}</a>
                <a className="artist text-nowrap" href="/#">{info.artist.name}</a>
            </div>
        </AlbumCoverWrapper>
    )
})
