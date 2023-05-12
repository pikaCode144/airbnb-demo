import styled from "styled-components"

export const TabsWrapper = styled.div`
  padding: 8px 0;

  .item {
    flex-basis: 120px;
    flex-shrink: 0;
    margin-right: 16px;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    border: 1px solid #d8d8d8;
    border-radius: 3px;
    white-space: nowrap;
    cursor: pointer;

    ${props => props.theme.mixin.boxShadow}

    &:last-child {
      margin-right: 0;
    }

    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondary};
    }
  }
`