import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
    HeaderWrapper
} from './style';

function WYThemeHeader(props) {
    const { title="歌曲列表",keywords,rightIsPlay } = props;
    
    return (
        <HeaderWrapper className="sprite-02" rightIsPlay={rightIsPlay}>
            <div className="left">
                <h3 className="title">{title}</h3>
                <div className="keyword">
                    {
                        keywords.map((item,index)=>{
                            return (
                                <div className="item" key={item}>
                                    <a href="/#">{item}</a>
                                    <span className="line">|</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="right" >
                <NavLink to="/discover/songs" className="more">更多</NavLink>
                <i className="icon sprite-02"></i>
            </div>
        </HeaderWrapper>
    )
}

WYThemeHeader.propTypes = {
    title: PropTypes.string.isRequired,
    keywords: PropTypes.array
}

WYThemeHeader.defaultProps = {
    keywords: []
}

export default memo(WYThemeHeader);