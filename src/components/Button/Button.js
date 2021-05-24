import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default function Button(props) {
  return <ButtonStyled {...props} />
}

const ButtonStyled = styled.button`
  padding: 12px;
  border: none;
  background: ${p => (p.isActive ? 'black' : 'lightgrey')};
  border-radius: 8px;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
`
