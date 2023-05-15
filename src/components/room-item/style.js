import styled from "styled-components"

export const ItemWrapper = styled.div`
  width: ${props => props.itemWidth};
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 8px;
  margin: 8px 0;

  .inner {
    width: 100%;

    .slider {
      position: relative;
      cursor: pointer;

      &:hover {
        .control {
          display: flex;
        }
      }

      .control {
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: none;
        justify-content: space-between;
        color: #fff;

        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 83px;
          height: 100%;
          background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);

          &.right {
            background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
          }
        }
      }

      .indicator {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 8px;
        z-index: 9;
        width: 30%;
        margin: 0 auto;

        .dot-item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20%;

          .dot {
            width: 6px;
            height: 6px;
            background-color: #fff;
            border-radius: 50%;

            &.active {
              width: 8px;
              height: 8px;
            }
          }
        }
      }
    }

    .cover {
      position: relative;
      box-sizing: border-box;
      padding: 66.66% 8px 0;
      border-radius: 3px;
      overflow: hidden;

      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .desc {
      font-size: 12px;
      font-weight: 700;
      color: ${props => props.verifyColor };
      margin: 10px 0 5px;
    }

    .name {
      font-size: 16px;
      font-weight: 700;
      overflow: hidden;  
      text-overflow: ellipsis; 
      display: -webkit-box; 
      -webkit-line-clamp: 2; 
      -webkit-box-orient: vertical;
    }

    .price {
      margin: 8px 0;
      font-size: 16px;
    }

    .bottom {
      display: flex;
      align-items: center;
      font-size: ${props => props.bottomInfo.fontSize + 'px'};
      color: ${props => props.bottomInfo.contentColor};
      font-weight: 700;

      .rate {
        font-size: 10px;
        color: ${props => props.starRantingColor};

        .ant-rate-star {
          margin: 0;
        }
      }

      .reviews_count {
        margin: 0 2px 0 4px;
      }
    }
  }
`