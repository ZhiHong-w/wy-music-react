import styled from 'styled-components';

export const CategoryWrapper1 = styled.div`
  width: 180px;
  padding: 50px 10px 40px;
  padding-top: 50px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  /* height: 100%;
  margin: 0; */

  background-color: #fafafa;

  .section {
    border-bottom: 1px solid #d3d3d3;
    padding: 10px 0;

    &:last-of-type {
      border-bottom: none;
    }

    .title {
      height: 25px;
      padding-left: 14px;
      font-size: 16px;
      margin-bottom: 5px;
      font-family: "Microsoft Yahei";
    }
  }

  
`

export const CategoryItem1 = styled.div`
  width: 160px;
  color: #333;
  height: 29px;
  line-height: 29px;
  margin-bottom: 2px;
  cursor: pointer;

  &.active {
    span {
      color: red;
      background-position: 0 0;
    }
  }

  span {
    display: inline-block;
    width: 160px;
    padding-left: 27px;
    background: url(${require("@/assets/img/singer_sprite.png")}) no-repeat 0 -30px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
`