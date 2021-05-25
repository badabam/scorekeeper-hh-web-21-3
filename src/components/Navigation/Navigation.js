import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'

Navigation.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, path: PropTypes.string })
  ),
}
export default function Navigation({ pages }) {
  return (
    <Nav>
      {pages.map(({ name, path }) => (
        <NavButton
          activeStyle={{ background: 'steelblue' }}
          key={name}
          to={path}
        >
          {name}
        </NavButton>
      ))}
      ,
      {/* {pages.map(({ title, id }) => (
        <NavButton
          key={id}
          isActive={currentPageId === id}
          onClick={() => onNavigate(id)}
        >
          {title}
        </NavButton>
      ))} */}
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
`

const NavButton = styled(NavLink)`
  border-radius: 0;
  width: 100%;
`
