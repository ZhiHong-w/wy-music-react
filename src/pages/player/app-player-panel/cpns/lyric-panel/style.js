import styled from 'styled-components';

export const LyricPanelWrapper = styled.div`
  position: relative;
  flex: 1;
  margin: 21px 0 20px 0;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    /* display: none; */
    width: 4px;
    background-color: transparent;
    opacity: 0.8;
  }
 
  /*定义滑块 内阴影+圆角*/  
   &::-webkit-scrollbar-thumb  
  {  
    border-radius: 10px;    
    background-color: #868686; 
  }  


  .lrc-content {
    .lrc-item {
      height: 32px;
      text-align: center;
      color: #989898;

      &.active {
        color: #fff;
        font-size: 14px;
      }
    }
  }
`