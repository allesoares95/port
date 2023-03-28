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
          <S.NavBarLogo href="#home" onClick={closeMobileMenu}>
            <img src="/img/logo.svg" alt="foto de perfil" />
          </S.NavBarLogo>

          <S.MenuIcon onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </S.MenuIcon>

          <S.NavMenu className={click ? 'nav-menu active' : 'nav-menu'}>
            <S.NavLinks href="#home" onClick={closeMobileMenu}>
              home
            </S.NavLinks>

            <S.NavLinks href="#sobre" onClick={closeMobileMenu}>
              sobre
            </S.NavLinks>

            <S.NavLinks href="#formacao" onClick={closeMobileMenu}>
              formacao
            </S.NavLinks>

            <S.NavLinks href="#projetos" onClick={closeMobileMenu}>
              projetos
            </S.NavLinks>

            <S.NavLinks href="#contato" onClick={closeMobileMenu}>
              contato
            </S.NavLinks>
          </S.NavMenu>
        </S.NavBarContainer>
      </S.NavBar>
    </S.Header>
  )
}

export default Header
