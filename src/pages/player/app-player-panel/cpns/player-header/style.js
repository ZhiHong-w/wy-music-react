import styled from 'styled-components';

import PlayerPanel from '@/assets/img/playpanel_bg.png';

export const PlayerHeaderWrapper = styled.div`
  display: flex;
  height: 41px;
  line-height: 41px;
  background: url(${PlayerPanel}) 0 0;
`

export const PlayerHeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 553px;
  padding: 0 25px;

  h3 {
    color: #e2e2e2;
    font-weight: 700;
  }

  .operator {
    color: #ccc;

    button {
      background-color: transparent;
      color: #ccc;
    }

    .icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      position: relative;
      top: 4px;
      right: 2px;
    }

    .favor {
      background-position: -24px 0;
    }

    .remove {
      width: 13px;
      background-position: -51px 0;
    }
  }
`

export const PlayerHeaderRight = styled.div`
  display: flex;
  
  .songname {
      position: absolute;
      left: 595px;
      width: 346px;
      text-align: center;
      color: #fff;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 14px;
  }

  .disopen {
    background-position: -195px 9px;
    cursor: pointer;
    position: absolute;
    top: 6px;
    right: 8px;
    width: 30px;
    height: 30px;
    text-indent: -9999px;
  }
  .disopen:hover {
      background-position: -195px -21px;
  }
`