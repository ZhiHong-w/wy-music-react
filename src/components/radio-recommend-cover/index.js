import React, { memo } from 'react';

import { changeImageSize } from "@/utils/format-utils";

import {
  CoverWrapper
} from "./style";

export default memo(function WYRadioRecommendCover(props) {
  const { info } = props;

  return (
    <CoverWrapper>
      <a href="/#">
        <img src={changeImageSize(info.picUrl, 150)} alt="" />
      </a>
      <a href="/#" className="text-nowrap name">{info.name}</a>
      <p className="text-nowrap">{info.desc}</p>
    </CoverWrapper>
  )
})
