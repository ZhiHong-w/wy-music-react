import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 33px;
  border-bottom: 2px solid #C10D0C;
  padding: 0 10px 4px 34px;
  background-position: -225px -156px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
      display: flex;
      align-items: center;

      .title {
        font-size: 20px;
        font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
        margin-right: 20px;  
      }

      .keyword {
          display: flex;
          justify-content: none;


          .item {
            margin: 0 0px;

            :last-of-type .line {
              display: none;
            }

            a {
              color: #666;
              padding: 0 0;


              &:hover{
                  text-decoration: underline;
                  background-color: transparent;
              }
            }

            .line {
              margin: 0 10px;
              color: #ccc;
            }

          }


      }
  }

  .right {
    display: ${props => props.rightIsPlay ? "flex":"none"};
    align-items: center;
    margin-top: 2px;
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`