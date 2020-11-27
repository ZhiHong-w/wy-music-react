import React, { memo,useEffect,useRef} from 'react';
import { connect } from 'react-redux'
import { Carousel } from 'antd'

import WYThemeHeader from '@/components/theme-header';
import WYAlbumCover from '@/components/album-cover';
import { getNewAlbumAction } from '../../store/actionCreators';
import { AlbumWrapper } from './style';

function WYNewAlbum(props) {
    const { newAlbum, getNewAlbum } = props;
     
    const pageRef = useRef();

    useEffect(()=>{
        getNewAlbum(10);
    },[getNewAlbum])

    return (
        <AlbumWrapper>
            <WYThemeHeader title="新碟上架" rightIsPlay={true}></WYThemeHeader>
            <div className="cont">
                <div className="arrow arrow-left sprite-02" onClick={e => pageRef.current.prev()}></div>
                <div className="album">
                    <Carousel dots={false} ref={pageRef}>
                        {
                            [0,1].map(item => {
                                return (
                                   <div className="page" key={item}>
                                       {
                                           newAlbum.slice(item*5, (item+1)*5).map(iten => {
                                               return (
                                                   <WYAlbumCover key={iten.id}
                                                                 info={iten}
                                                                 size={100}
                                                                 width={118}
                                                                 bgp="-570px" />
                                               )
                                           })
                                       }
                                   </div> 
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div className="arrow arrow-right sprite-02" onClick={e => pageRef.current.next()}></div>
            </div>
        </AlbumWrapper>
    )
}

//react-redux的一种用法
const mapStateToProps = state => ({
    // newAlbum: state.recommend.newAlbum
    newAlbum: state.getIn(["recommend","newAlbum"])
})

const mapDispatchToProps = dispatch => ({
    getNewAlbum: function(limit) {
        dispatch(getNewAlbumAction(limit))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(memo(WYNewAlbum))
