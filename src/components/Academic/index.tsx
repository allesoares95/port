import * as S from './styles'

const Academic = () => (
  <S.Academic>
    <S.Title>Formação Acadêmica</S.Title>
    <S.ImgReact src="/img/img-react.png" />

    <S.Content>
      <S.Skill>
        <S.TitleSkill>Habilidades</S.TitleSkill>
        <S.Text>
          JavaScript, React, Next e TypeScript.
          <br />
          HTML, CSS, Styled-components
          <br />
          <br />
          Conhecimento geral
          <br />
          Git/GitHub Figma SQL APIs.
          <br />
          Windowns e Linux.
        </S.Text>
      </S.Skill>

      <S.Skill>
        <S.TitleSkill>Escolaridade</S.TitleSkill>
        <S.Text>
          Faculdade Anhanguera:
          <br />
          Análise e Desenvolvimento de Sistema.
          <br />
          (Andamento)
          <br />
          <br />
          Cursos livre
          <br />
          RocketSeat: Desenvolvimento Front-end.
          <br />
          Alura:Desenvolvimento Web. <br />
          Dio: Lógica de programação
        </S.Text>
      </S.Skill>
    </S.Content>
  </S.Academic>
)

export default Academic
