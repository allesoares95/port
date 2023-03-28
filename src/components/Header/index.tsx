import * as S from './styles'
import { useState } from 'react'

function Header() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <S.Header>
      <S.NavBar>
        <S.NavBarContainer>
          <S.NavBarLogo href="/" onClick={closeMobileMenu}>
            <img src="/img/logo.svg" alt="foto de perfil" />
          </S.NavBarLogo>

          <S.MenuIcon onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </S.MenuIcon>

          <S.NavMenu className={click ? 'nav-menu active' : 'nav-menu'}>
            <S.NavItem>
              <S.NavLinks href="/" onClick={closeMobileMenu}>
                Home
              </S.NavLinks>
            </S.NavItem>

            <S.NavItem>
              <S.NavLinks href="/sobre" onClick={closeMobileMenu}>
                Sobre-mim
              </S.NavLinks>
            </S.NavItem>

            <S.NavItem>
              <S.NavLinks href="/formacao" onClick={closeMobileMenu}>
                Formação
              </S.NavLinks>
            </S.NavItem>

            <S.NavItem>
              <S.NavLinks href="/projetos" onClick={closeMobileMenu}>
                Projetos
              </S.NavLinks>
            </S.NavItem>

            <S.NavItem>
              <S.NavLinks href="/contato" onClick={closeMobileMenu}>
                Contato
              </S.NavLinks>
            </S.NavItem>
          </S.NavMenu>
        </S.NavBarContainer>
      </S.NavBar>
    </S.Header>
  )
}

export default Header
