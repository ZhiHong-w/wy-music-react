import React, { memo, Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './router';
import store from '@/store';
import WYAppHeader from '@/components/app-header';
import WYAppFooter from '@/components/app-footer';
import WYAppPlayerBar from './pages/player/app-player-bar'

export default memo(function App(props) {
    return (
        <Provider store={store}>
            <HashRouter>
                <WYAppHeader></WYAppHeader>
                <Suspense fallback={<div>loading...</div>}>
                    {renderRoutes(routes)}
                </Suspense>
                <WYAppFooter></WYAppFooter>
                <WYAppPlayerBar></WYAppPlayerBar>
            </HashRouter>
        </Provider>
    )
})

