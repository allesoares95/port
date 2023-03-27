import React from 'react'
import Header from 'components/Header'
import * as S from './styles'
import About from 'components/About'
import Academic from 'components/Academic'
import Project from 'components/Project'
import Contact from 'components/Contact'
import Footer from 'components/Footer'
import { TechAnimation } from 'components/Animation/TechLottie'

const Home = () => {
  return (
    <>
      <Header />

      <S.Home
        style={{
          backgroundImage: "url('/img/background.jpg')",
          opacity: 1.5,
          width: '100%',
          height: 'cal(100vh - 100px)'
        }}
      >
        <S.TitleDiv>
          <S.Title>DEVELOPER FRONT END</S.Title>
          <S.Text>PORTFÓLIO</S.Text>
        </S.TitleDiv>
        <S.HomePage>
          <S.Message>
            <S.Title>Bem-vindo ao meu portfólio!</S.Title>
            <S.Text>
              Aqui você encontrará alguns dos meus trabalhos como desenvolvedor
              front-end.
            </S.Text>
            <S.Text>
              Sinta-se à vontade para navegar e entrar em contato comigo caso
              precise de ajuda em algum projeto.
            </S.Text>
          </S.Message>

          <TechAnimation />
        </S.HomePage>
      </S.Home>

      <About />
      <Academic />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
