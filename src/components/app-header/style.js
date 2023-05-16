import styled from "styled-components"

export const HeaderWrapper = styled.div`
  &.fixed {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
  }

  .content {
    position: relative;
    z-index: 99;
    background-color: ${props => props.theme.isAlpha ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)'};
    border-bottom: 1px solid #eee;
    border-bottom-color: ${props => props.theme.isAlpha ? 'rgba(238, 238, 238, 0)' : 'rgba(238, 238, 238, 1)'};
    

    .top {
      display: flex;
      align-items: center;
      height: 80px;
      padding: 0 24px;
    }
  }

  .cover {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.3);
  }
`

export const SearchAreaWrapper = styled.div`
  height: ${props => props.isSearch ? '100px' : '0'};
  transition: height 0.3s ease;
`