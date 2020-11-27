import styled from 'styled-components';

import wrapBg from '@/assets/img/wrap-bg.png';

export const PlayerWrapper = styled.div`
  .main-content {
    background: url(${wrapBg}) repeat-y;
    background-color: #fff;
    display: flex;
  }
`

export const PlayerLeft = styled.div`
  width: 710px;
`

export const PlayerRight = styled.div`
  width: 270px;
  padding: 20px 40px 40px 30px;
`