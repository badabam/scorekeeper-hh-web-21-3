import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components/macro'

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  component:
    PropTypes.any /* could not find a better type, feel free to improve */,
  disabled: PropTypes.bool,
}

export default function Button({
  component: Component = 'button',
  ...otherProps
}) {
  return <ButtonStyled as={Component} {...otherProps} />
}

const ButtonStyled = styled.button`
  padding: 12px;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  text-align: center;

  background: ${p => (p.isActive ? 'steelblue' : '#ddd')};

  &.active {
    background: steelblue;
  }

  &[disabled] {
    opacity: 0.6;
    pointer-events: none;
  }
`
