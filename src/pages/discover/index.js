import React, { memo} from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { discoverMenu } from '@/common/local-data';
import {
    DiscoverWrapper
} from './style';


export default memo(function WYDiscover(props) {
    const { route } = props;

    return (
        <DiscoverWrapper>
            <div className="top">
                <div className="wrap-v1 content">
                    {
                        discoverMenu.map((item, index) => {
                            return (
                                <div className="item" key={item.title}>
                                    <NavLink to={item.link} activeClassName="active">{item.title}</NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {renderRoutes(route.routes)}
        </DiscoverWrapper>
    )
})
