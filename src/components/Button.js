import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default function Button(props) {
  return <ButtonStyled {...props} />
}

const ButtonStyled = styled.button`
  padding: 12px;
  border: none;
  background: ${p => (p.isActive ? 'steelblue' : 'grey')};
  border-radius: 8px;
`
