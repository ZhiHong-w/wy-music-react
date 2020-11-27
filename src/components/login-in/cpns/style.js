import styled from 'styled-components';

export const WYLoginWrapper = styled.div`
  display: ${props => props.isShow ? "initial":"none"};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
  overflow-y: hidden;

  .content {
    position: fixed;
    width: 530px;
    height: 372px;
    background-color: #fff;
    left: 50%;
    top: 50%; 
    transform: ${props =>  `translate(${props.left}px,${props.top}px)`};
    border-radius: 4px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.8);

    .top-content {
      width: 530px;
      height: 39px;
      background-color: #2d2d2d;
      border-radius: 4px 4px 0 0;
      display: flex;
      padding: 0 20px;
      justify-content: space-between;
      color: #fff;
      font-size: 14px;
      line-height: 39px;
      cursor: move;

      .login-out {
        cursor: pointer;
        color: #c2c2c2;
      }
  }
}
  
`