import styled from "styled-components"

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .ant-pagination-item {
      border-radius: 16px;
      margin: 0 8px;

      &:hover {
        text-decoration: underline;
      }
    }

    .ant-pagination-item.ant-pagination-item-active {
      background-color: #222;
      border-color: #222;
    }

    .ant-pagination-item.ant-pagination-item-active a {
      color: #fff;
    }

    .desc {
      margin-top: 15px;
    }
  }
`