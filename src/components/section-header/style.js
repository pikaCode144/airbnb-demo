import styled from "styled-components"

export const HeaderWrapper = styled.div`
  display: flex;
  color: ${props => props.theme.color.textColorSecondary};

  .box {
    position: relative;
    cursor: pointer;
    padding-top: 16px;
    
    .title {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 16px;
    }

    .subtitle {
      font-size: 16px;
      margin-bottom: 20px;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -15px;
      display: none;
      width: 8px;
      height: 8px;
      border: 1px solid #222;
      border-color: #222 #222 transparent transparent;
      transform: translate(0, -50%) rotate(45deg);
    }

    &:hover::after {
      display: block;
    }
  }

  


`