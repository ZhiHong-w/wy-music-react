import React, { useEffect, memo } from 'react';
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';

import { 
  getCategory,
  getSongList,
  changeCurrentCategoryAction
} from "./store/actionCreators";

import WYSongsHeader from "./cpns/songs-header";
import WYSongsList from './cpns/songs-list';
import {
  SongsWrapper
} from "./style"

export default memo(function WYSongs() {
  const dispatch = useDispatch();
  const cat = useLocation().cat;

  useEffect(() => {
    dispatch(changeCurrentCategoryAction(cat));

  }, [dispatch, cat]);

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getSongList(0));
  }, [dispatch])

  return (
    <SongsWrapper className="wrap-v2">
      <WYSongsHeader/>
      <WYSongsList/>
    </SongsWrapper>
  )
})
