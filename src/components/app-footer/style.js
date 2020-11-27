import styled from 'styled-components';
import sprite_footer_02 from '@/assets/img/sprite_footer_02.png';

export const FooterWrapper = styled.div`
  height: 172px;
  background-color: #f2f2f2;
  color: #666;
  border-top: 1px solid #d3d3d3;
  padding-top: 20px;

  .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
  }
`

export const FooterLeft = styled.div`
  color: #666;

  .link {
    color: #999;
  }

  .link .line {
      margin: 0 10px;
      color: #999;
  }

  .copyright span, .report span, .info span{
      margin-right: 15px;
  }

  .copyright,.report,.info {
      margin-top: 3px;
  }

`

export const FooterRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
  width: 440px;

  .item {

      .link {
          margin: 0 auto;
          display: block;
          width: 50px;
          height: 45px;
          background-image: url(${sprite_footer_02});
          background-size: 110px 552px;
      }

      :nth-of-type(1) .link {
        width: 47px;
        background-position: -63px -456.5px;
      }
      :nth-of-type(2) .link {
        background-position: -63px -101px;
        width: 47px;
      }
      :nth-of-type(3) .link {
        background-position: 0 0;
      }
      :nth-of-type(4) .link {
        background-position: -60px -50px;
      }
      :nth-of-type(5) .link {
        background-position: 0 -101px;
      }

      .title {
         color: #999;
         width: 80px;
         text-align: center;
      }
  }
`