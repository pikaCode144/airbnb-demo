import styled from "styled-components"

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  color: ${props => props.theme.color.textColor};
  font-weight: 700;
  
  .btns {
    display: flex;
    align-items: center;

    .btn {
      padding: 12px 15px;
      line-height: 18px;
      border-radius: 21px;
      cursor: pointer;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 75px;
    border: 1px solid #ccc;
    border-radius: 25px;
    color: #717171;
    cursor: pointer;

    ${props => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      top: 55px;
      right: 0;
      width: 240px;
      height: 200px;
      color: #888;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.18);

      .top, .bottom {
        padding: 10px 0;

        .item {
          padding: 8px 16px;

          &:hover {
            background-color: #f7f7f7;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`