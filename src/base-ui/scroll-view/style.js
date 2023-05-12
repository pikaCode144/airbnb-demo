import styled from "styled-components"

export const ViewWrapper = styled.div`
  position: relative;

  .button-left,
  .button-right {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    width: 28px;
    height: 28px;
    border: 2px solid #fff;
    border-radius: 14px;
    background-color: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;
    z-index: 9;
    transform: translate();


  }

  .button-left {
    left: 0;
    transform: translate(-50%, -50%);
  }

  .button-right {
    right: 0;
    transform: translate(50%, -50%);
  }

  .content {
    overflow: hidden;

    .scroll-content {
      display: flex;
      transition: transform 250ms ease;
      transform: translateX(-${props => props.translateX}px);
    }
  }
`