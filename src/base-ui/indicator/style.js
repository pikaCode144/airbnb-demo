import styled from "styled-components"

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  .i-content {
    position: relative;
    display: flex;
    transition: transform 0.2s ease;
    transform: translate(${props => -props.translateLeft}px);

    > * {
    flex-shrink: 0;
  }
  }
`