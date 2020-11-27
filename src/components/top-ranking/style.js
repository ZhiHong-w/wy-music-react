import styled from 'styled-components';

export const TopRankingWraper = styled.div`
  flex: 1;

  .header {
      height: 100px;
      display: flex;

      margin: 20px 0 0 20px;

      .image {
          width: 80px;
          height: 80px;
          position: relative;

          img{
              width: 80px;
              height: 80px;
          }
      }

      .info {
          margin: 5px 0 0 10px;

          a {
              font-size: 14px;
              color: #333;
              font-weight: 700;
          }

          .btn {
              display: inline-block;
              width: 22px;
              height: 22px;
              margin: 8px 10px 0 0;
          }

          .play {
            background-position: -267px -205px; 
          }
          .play:hover {
            background-position: -267px -235px;
          }

          .favor {
            background-position: -300px -205px;
          }
          .favor:hover {
            background-position: -300px -235px; 
          }
      }
  }

  .body .body-item {
      display: flex;
      align-items: center;
      height: 32px;

      &:nth-of-type(-n+3) .rank {
          color: #c10d0c;
      }
      
      .rank {
          width: 35px;
          margin-left: 15px;
          margin-right: 5px;
          font-size: 16px;
          text-align: center;
      }

      .play-music {

        width: 170px;
        display: flex;

        .music-name {
          display: inline-block;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          color: #000;
        }

      .operate {
          display: none;
          width: 82px;

          .bn {
              display: inline-block;
              width: 17px;
              height: 17px;
              margin: 0 4px;
          }

          .play {
            background-position: -267px -268px;
          }
          .play:hover {
            background-position: -267px -288px;
          }

          .addto {
            position: relative;
            top: 2px;
            background-position: 0 -700px;
          }
          .addto:hover {
            position: relative;
            top: 2px;
            background-position: -22px -700px;
          }

          .favor {
            background-position: -297px -268px;
          }
          .favor:hover {
            background-position: -297px -288px;
          }
      }
      
      &:hover .music-name {
          width: 88px;
      }
      &:hover .operate {
          display: flex;
          align-items: center;
      }
    }

     
  }

  .footer {
      display: flex;
      align-items: center;
      height: 32px;
      justify-content: flex-end;
      margin-right: 30px;
      
      a{
          color: #000;
      }
  }
`