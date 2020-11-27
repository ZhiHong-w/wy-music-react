import styled from 'styled-components';
import mineSprite from "@/assets/img/mine_sprite.png";

export const WYMineWrapper = styled.div`
 .content {
     background-color: #fff;
     min-height: 700px;

     .image {
         position: relative;
         width: 807px;
         height: 372px;
         margin: 0 auto;
         background-image: url(${mineSprite});
         background-position: 0 104px;
         background-repeat: no-repeat;

         .login {
             position: absolute;
             width: 167px;
             height: 45px;
             left: 482px;
             top: 302px;
             text-indent: -9999px;
             background-color: transparent;
             cursor: pointer;

             &:hover {
                background-image: url(${mineSprite});
                background-position: 0 bottom;
                top: 306px;
             }
         }
     }
 }
`