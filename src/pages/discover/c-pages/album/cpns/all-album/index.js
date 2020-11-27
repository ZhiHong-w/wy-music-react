import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getTopAlbumsAction } from '../../store/actionCreators'
import { AllAlbumWrapper } from './style';
import WYAlbumCover from '@/components/album-cover';
import WYThemeHeader from '@/components/theme-header';
import WYPagination from '@/components/pagination';

export default memo(function WYAllNewAlbum() {
    const [currentPage, setCurrentPage] = useState(1);

    const { topAlbums, total } = useSelector(state => ({
        topAlbums: state.getIn(["album", "topAlbums"]),
        total: state.getIn(["album", "topTotal"])
    }), shallowEqual);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopAlbumsAction(1));
    }, [dispatch]);

    const onPageChange = (page, pageSize) => {
        setCurrentPage(page);
        dispatch(getTopAlbumsAction(page));
    }

    return (
        <AllAlbumWrapper>
            <WYThemeHeader title="全部新碟" rightIsPlay={false}></WYThemeHeader>
            <div className="album-list">
                {
                    topAlbums.map((item, index) => {
                        return <WYAlbumCover size={130}
                            width={153}
                            bgp={"-845px"}
                            key={item.id}
                            info={item} />
                    })
                }
            </div>
            <WYPagination currentPage={currentPage}
                total={total}
                pageSize={35}
                onPageChange={onPageChange} />
        </AllAlbumWrapper>
    )
})
