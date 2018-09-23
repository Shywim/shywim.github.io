import React from 'react'
import styled, { css } from 'styled-components'

const BarWrapper = styled.div`
  transform: ${props => css`rotate(${props.rotate}deg)`};
  transform-origin: left top;
  z-index: ${props => props.pos};
`

const Bar = styled.div`
  --padding: ${props => css`calc(5px + (${props.fontSize}px * 0.5) - 10px)`};
  position: relative;
  width: ${props => props.width}px;
  font-size: ${props => props.fontSize}px;
  margin: 0 0 0 -10px;
  padding: var(--padding) var(--padding) var(--padding)
    ${props => css`calc(-10px + ${props.width}px / 5)`};
  background-color: #0984e3;
  color: white;
  font-family: 'Lato';

  &:after {
    content: '';
    display: block;
    background-color: white;
    position: absolute;
    top: 5px;
    bottom: ${props => css`calc(-5px - ${props.width}px / 50)`};
    left: 5px;
    right: ${props => css`calc(-5px - ${props.width}px / 5)`};
    z-index: -1;
    transform: ${props => css`rotate(calc(2deg + ${props.width}deg / 150))`};
    opacity: 0.9;
  }
`

export default ({ rotate, pos, width, fontSize, style, children }) => (
  <BarWrapper rotate={rotate} pos={pos} style={style}>
    <Bar width={width} fontSize={fontSize}>
      {children}
    </Bar>
  </BarWrapper>
)
