import styled from "styled-components"

export const SectionsWrapper = styled.div`
  display: flex;
  width: 850px;
  height: 66px;
  border: 1px solid #d3d3d3;
  border-radius: 33px;
  background-color: #fff;

  .item {
    flex: 1;
    display: flex;
    align-items: center;

    .info {
      flex: 1;
      padding: 14px 32px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title {
        font-size: 12px;
        font-weight: 700;
      }
    }
    
    .divider {
      height: 32px;
      border-right: 1px solid #d3d3d3;
    }
  }
`