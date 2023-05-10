import styled from "styled-components"

export const ItemWrapper = styled.div`
  width: 25%;
  box-sizing: border-box;
  padding: 8px;
  margin: 8px 0;

  .inner {
    width: 100%;

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