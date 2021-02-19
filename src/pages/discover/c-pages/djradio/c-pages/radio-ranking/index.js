import React, { useEffect, memo ,useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { 
  getRadios
} from "../../store/actionCreators";

import WYThemeHeaderNormal from '@/components/theme-header-normal';
import WYRadioRankingCover from '@/components/radio-ranking-cover';
import WYPagination from '@/components/pagination';
import {
  RankingWraper
} from "./style";

export default memo(function HYRadioRanking() {
  
  const [currentPage, setCurrentPage] = useState(1);

  
  const { currentId, radios } = useSelector(state => ({
    currentId: state.getIn(["djradio", "currentId"]),
    radios: state.getIn(["djradio", "radios"])
  }), shallowEqual)
  const dispatch = useDispatch();


  useEffect(() => {
    if (currentId === 0) return;
    dispatch(getRadios(currentId, 0))
  }, [dispatch, currentId]);

  
  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
    dispatch(getRadios(currentId, page * 30));
  }

  return (
    <RankingWraper>
      <WYThemeHeaderNormal title="电台排行榜"/>
      <div className="ranking-list">
        {
          radios.map((item, index) => {
            return (<WYRadioRankingCover key={item.id} radio={item}/>)
          })
        }
      </div>
      <WYPagination currentPage={currentPage} 
                    total={1000} 
                    pageSize={30}
                    onPageChange={onPageChange}/>
    </RankingWraper>
  )
})
