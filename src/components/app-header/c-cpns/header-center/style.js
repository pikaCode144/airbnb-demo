import styled from "styled-components"

export const CenterWrapper = styled.div`
  width: 300px;

  .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 46px;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 23px;
    font-weight: 700;
    cursor: pointer;

    ${props => props.theme.mixin.boxShadow}

    .text {
      padding: 0 16px;
      color: ${props => props.theme.color.textColorSecondary};
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      color: ${props => props.theme.color.searchBarColor};
      background-color: ${props => props.theme.color.primary};
      border-radius: 16px;
    }
  }
`