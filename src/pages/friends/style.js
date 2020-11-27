import styled from 'styled-components';
import friendSprite from "@/assets/img/friend_sprite.jpg";

export const WYFriendsWrapper = styled.div`
  .content {
     background-color: #fff;
     min-height: 700px;

     .image {
         position: relative;
         width: 807px;
         height: 484px;
         margin: 0 auto;
         background-image: url(${friendSprite});
         background-position: 0 104px;
         background-repeat: no-repeat;

         .login {
             position: absolute;
             width: 167px;
             height: 45px;
             left: 535px;
             top: 368px;
             text-indent: -9999px;
             background-color: transparent;
             cursor: pointer;

             &:hover {
                background-image: url(${friendSprite});
                background-position: 0 -435px;
                /* top: 306px; */
             }
         }
     }
 }
`