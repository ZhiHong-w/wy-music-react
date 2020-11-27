import styled from 'styled-components';

export const DiscoverWrapper = styled.div`
  .top {
    height: 30px;
    background-color: #C20C0C;
    color: #fff;
  }

  .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 180px;
      /* margin-left: 100px; */
  }

  .item {
      margin: 2px 20px;

      a {
          color: #fff;
          display: inline-block;
          padding: 0 10px;

          &:hover,&.active {
              text-decoration: none;
              background-color: #9B0909;
              border-radius: 20px;
          }
      }

      
  }
`