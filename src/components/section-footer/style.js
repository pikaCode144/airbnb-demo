import styled from "styled-components"

export const FooterWrapper = styled.div`
  display: flex;
  margin: 15px 0 10px;
  font-size: 17px;
  font-weight: 700;

  .info,
  .view {
    cursor: pointer;
    color: #000;

    .text {
      margin-right: 5px;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  .view {
    color: ${props => props.theme.color.secondary};
  }
`