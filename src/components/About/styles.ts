import styled from 'styled-components'

export const About = styled.section`
  width: 100%;
  height: 100vh;

  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`

export const Container = styled.div``

export const ContentAbout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;

  @media (max-width: 869px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 30px;
  }
`

export const Title = styled.h1`
  text-align: center;
  padding: 100px 0 30px 0;

  @media (max-width: 869px) {
    padding: 40px 0 20px 0;
  }
`

export const TextAbout = styled.p`
  font-size: 20px;

  @media (max-width: 869px) {
    font-size: 14px;
  }
`

export const ImgPerfil = styled.img`
  width: 400px;
  border-radius: 50%;

  @media (max-width: 869px) {
    width: 250px;
  }
`
