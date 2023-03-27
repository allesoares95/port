import styled from 'styled-components'

export const About = styled.section`
  width: 100%;
  height: 120vh;

  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
`

export const ContentAbout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  gap: 30px;

  @media (max-width: 869px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 30px;
  }
`
export const NameAbout = styled.p``

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
  width: 300px;
  border-radius: 50%;

  @media (max-width: 869px) {
    width: 100px;
  }
`
