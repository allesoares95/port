import React from 'react'
import Header from 'components/Header'
import * as S from './styles'

const Home = () => {
  return (
    <>
      <Header />

      <S.Home
        style={{
          backgroundImage: "url('/img/background.jpg')",
          opacity: 1.5,
          width: '100%',
          height: '100vh'
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

          <S.ImgPerfil src="/img/img-main.png" />
        </S.HomePage>
      </S.Home>
    </>
  )
}

export default Home
