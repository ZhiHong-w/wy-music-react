import styled from 'styled-components';

export const AlbumCoverWrapper = styled.div`
  width: ${props => props.width + "px"};

  .album-image {
      position: relative;
      width: ${props => props.width + "px"};
      height: ${props => props.size + "px"};
      margin-top: 15px;
      overflow: hidden;

      .alimg {
        width: ${props => props.size + "px"};
        height: ${props => props.size + "px"};
      }

      .cov {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: block;
          background-position: 0 ${props => props.bgp};
      }

      .play {
          position: absolute;
          bottom: 7px;
          right: 26px;
          background-position: 0 0;
          width: 16px;
          height: 17px;
          display: none;
      }
      &:hover .play{
        display: block;
      }
  }

  .album-info {
    font-size: 12px;
    width: ${props => props.size};
    display: flex;
    flex-direction: column;

    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
  }
`