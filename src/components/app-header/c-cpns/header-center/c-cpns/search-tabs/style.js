import styled from "styled-components"

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 327px;
  height: 48px;
  color: ${props => props.theme.isAlpha ? '#fff' : '#222'};

  .item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 96px;
    height: 40px;

    .text {
      font-size: 16px;
      cursor: pointer;
    }

    .bottom {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      margin: 0 auto;
      width: 64px;
      height: 2px;
    }

    &.active .bottom {
      background-color: ${props => props.theme.isAlpha ? '#fff' : '#222'};
    }
  }
`