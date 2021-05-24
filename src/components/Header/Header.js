import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  children: PropTypes.node,
}

export default function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>
}

const HeaderStyled = styled.h2`
  display: grid;
  place-items: center;
  padding: 8px;
  margin: 0;
  font-size: 1.2em;
  font-weight: 500;
  background-image: linear-gradient(to top, #c79081 0%, #dfa579 100%);
`
