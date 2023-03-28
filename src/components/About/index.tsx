import * as S from './styles'
import Typical from 'react-typical'

const About = () => (
  <S.About>
    <S.Title>Sobre mim</S.Title>

    <S.ContentAbout>
      <S.Container>
        <S.ImgPerfil src="/img/perfil-img.svg" />

        <S.NameAbout>Alexandre Soares</S.NameAbout>
        <Typical
          loop={Infinity}
          steps={[
            'Developer',
            2500,
            'Front-end',
            2500,
            'JavaScript',
            2500,
            'React',
            2500
          ]}
        />
      </S.Container>
      <S.TextAbout>
        Olá! sou Desenvolvedor front-end, com conhecimento práticos em diversas
        tecnologias para a criação de interfaces web. Meu conjunto de
        habilidades inclui JavaScript, TypeScript, React, Next, HTML, CSS,
        Styled-Components, NodeJS, APIs, SQL, Git e GitHub e Figma.
        <br />
        <br />
        Estou me formando em Análise e Desenvolvimento de Sistema, o que me
        proprocionou uma base sólida em programação e lógica de programação.
        <br />
        <br />
        Estou sempre buscando novas oportunidades para aperfeiçõar meu
        conhecimento como desenvolvedor. Sou proativo e tenho uma alta
        capacidade de aprendizado. Estou sempre em busca de aprender novas
        tecnologias e explorar novas forma de fazer as coisas.
        <br />
        <br />
        Meu objetivo é sempre fornecer soluções criativas e eficazes para os
        projetos em que trabalho, atendendo às necessidades dos usuários e
        excedendo as expectativas dos clientes.
        <br />
      </S.TextAbout>
    </S.ContentAbout>
  </S.About>
)

export default About
