import React from 'react';
import { Redirect } from "react-router-dom";

import WYDiscover from '@/pages/discover';
import WYFriends from '@/pages/friends';
import WYMine from '@/pages/mine';
import WYPlayer from '@/pages/player';

import WYRecommend from '@/pages/discover/c-pages/recommend';
import WYRanking from '@/pages/discover/c-pages/ranking';
import WYSongs from '@/pages/discover/c-pages/songs';
import WYAlbum from '@/pages/discover/c-pages/album';
import WYArtist from '@/pages/discover/c-pages/artist';
import WYDjradio from '@/pages/discover/c-pages/djradio';

const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to="/discover"/>
          )
    },
    {
        path: "/discover",
        component: WYDiscover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: ()=> (
                    <Redirect  to="/discover/recommend" />
                )
            },
            {
                path: "/discover/recommend",
                exact: true,
                component: WYRecommend,
            },
            {
                path: "/discover/ranking",
                exact: true,
                component: WYRanking,
            },
            {
                path: "/discover/songs",
                exact: true,
                component: WYSongs,
            },
            {
                path: "/discover/djradio",
                exact: true,
                component: WYDjradio,
            },
            {
                path: "/discover/artist",
                exact: true,
                component: WYArtist,
            },
            {
                path: "/discover/album",
                exact: true,
                component: WYAlbum,
            },
            {
                path: "/discover/player",
                exact: true,
                component: WYPlayer,
            }
        ]
    },
    {
        path: "/mine",
        exact: true,
        component: WYMine
    },
    {
        path: "/friends",
        exact: true,
        component: WYFriends
    },
];

export default routes;