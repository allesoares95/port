import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  opacity: 0.85;
  width: 100%;

  @media (max-width: 869px) {
    opacity: 1;
    position: fixed;
  }

  .fa-bars {
    color: ${(props) => props.theme.menu};
  }

  .fa-times {
    color: ${(props) => props.theme.menu};
    font-size: 2rem;
  }

  .nav-menu.active {
    background: ${(props) => props.theme.menu};
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
  }
`

export const NavBar = styled.nav`
  background: ${(props) => props.theme.secundary};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 0 50px;

  @media (max-width: 869px) {
    padding: 0 20px;
    height: 90vh;
  }
`

export const NavBarLogo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MenuIcon = styled.div`
  display: none;

  @media (max-width: 869px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 60vw;
  justify-content: end;
  margin-right: 2rem;

  @media (max-width: 869px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled.a`
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  :hover {
    border-bottom: 4px solid ${(props) => props.theme.text};
    transition: all 0.2s ease-out;
  }

  @media (max-width: 869px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    :hover {
      background-color: ${(props) => props.theme.text};
      color: ${(props) => props.theme.menu};
      border-radius: 0;
    }
  }
`
