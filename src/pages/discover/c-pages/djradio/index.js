import React, { memo } from 'react';

import WYRadioCategory from './c-pages/radio-category';
import WYRadioRecommend from './c-pages/radio-recommend';
import WYRadioRanking from './c-pages/radio-ranking';
import {
  DjRadioWrapper
} from "./style";

export default memo(function HYDjradio() {
  return (
    <DjRadioWrapper className="wrap-v2">
      <WYRadioCategory />
      <WYRadioRecommend />
      <WYRadioRanking />
    </DjRadioWrapper>
  )
})
