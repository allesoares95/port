import styled from 'styled-components'

export const About = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1020px) {
    height: 120vh;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 1020px) {
  }
`

export const ContentAbout = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  @media (max-width: 1020px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
  }
`
export const NameAbout = styled.p`
  font-size: 1.5rem;
  margin: 0;
`

export const Title = styled.h1`
  text-align: center;
  padding: 100px 0 30px 0;
  font-size: 2rem;
`

export const TextAbout = styled.p`
  font-size: 1.25rem;

  @media (max-width: 1020px) {
    font-size: 0.8rem;
    padding: 0 5px;
  }
`

export const ImgPerfil = styled.img`
  width: 300px;
  border-radius: 50%;
  margin-bottom: 20px;

  @media (max-width: 1020px) {
    width: 100px;
  }
`
