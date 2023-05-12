import styled from "styled-components"

export const ItemWrapper = styled.div`
  position: relative;
  flex-basis: 20%;
  flex-shrink: 0;

  .inner {
    padding: 8px;

    .cover {
      width: 100%;
      border-radius: 3px;
      overflow: hidden;
    }

    .bg-cover {
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: 8px;
      height: 60%;
      border-radius: 0 0 3px 3px;
      background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%)
    }

    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      color: #fff;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .city {
        font-size: 18px;
        font-weight: 700;
      }

      .price {
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
`