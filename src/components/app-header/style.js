import styled from 'styled-components';
import sprite_01 from '@/assets/img/sprite_01.png';

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;

  .content{
      height: 70px;
      /* background-color: red; */
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      /* align-items: center; */
  }
  .divider{
      height: 5px;
      background-color: #C20C0C;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .logo {
      display: block;
      width: 176px;
      height: 69px;
      background-position: 0 0;
      text-indent: -9999px;
  }

  .select-list {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      line-height: 70px;

      .select-item {
          position: relative;

          a {
              display: block;
              padding: 0 18px;
              color: #ccc;
              font-size: 15px;
          }

          :last-of-type a {
              position: relative;

              ::after {
                  position: absolute;
                  content: "";
                  width: 28px;
                  height: 19px;
                  background-image: url(${sprite_01});
                  background-position: -190px 0;
                  top: 20px;
                  right: -18px;
              }
          }

          &:hover a, a.active {
              color: #fff;
              background-color: #000;
              text-decoration: none;
          }

          a.active .icon {
              position: absolute;
              display: inline-block;
              width: 12px;
              height: 7px;
              background-position: -226px 0;
              bottom: -1px;
              left: 50%;
              transform: translate(-50%,0);
          }

      }
     
  }
`

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #ccc;
  font-size: 12px;

  .search {
      width: 158px;
      height: 32px;
      border-radius: 16px;

      input::placeholder {
          font-size: 12px;
      }
   }

    .center {
        display: block;
        width: 90px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border: 1px solid #666;
        border-radius: 16px;
        margin: 0 16px;
        background-color: transparent;
        color: #ccc;
        text-decoration: none;

        :hover {
            border: 1px solid #fff;
        }
    }

    .login {
        color: #ccc;
        background-color: transparent;
        cursor: pointer;

        :hover {
            border-bottom: 1px solid #ccc;
            color: #fff;
        }
    }

    
  
`