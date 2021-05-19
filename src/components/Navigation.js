import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from './Button'

Navigation.propTypes = {
  onNavigate: PropTypes.func,
  pages: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, id: PropTypes.string })
  ),
  currentPageId: PropTypes.string,
}
export default function Navigation({ onNavigate, pages, currentPageId }) {
  return (
    <Nav>
      {pages.map(({ title, id }) => (
        <NavButton
          key={id}
          isActive={currentPageId === id}
          onClick={() => onNavigate(id)}
        >
          {title}
        </NavButton>
      ))}
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
`

const NavButton = styled(Button)`
  border-radius: 0;
  width: 100%;
`
