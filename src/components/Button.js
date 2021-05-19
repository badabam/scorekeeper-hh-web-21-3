import './Button.css'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  padding: 12px;
  border: none;
  background: ${p => (p.isActive ? 'steelblue' : '#ddd')};
  border-radius: 8px;
`

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default Button
