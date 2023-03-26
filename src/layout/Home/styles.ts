import styled from 'styled-components'

export const Home = styled.main`
  width: 100%;
  height: 100vh;
  background-color: url('/img/background.jpg');
  color: ${(props) => props.theme.text};

  @media (max-width: 789px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
  }
`

export const TitleDiv = styled.div`
  padding: 50px 80px;

  @media (max-width: 789px) {
    padding: 10px 20px;
  }
`

export const Title = styled.h1`
  font-family: 'Noto Serif JP', serif;
  font-size: 70px;

  @media (max-width: 789px) {
    font-size: 42px;
  }
`

export const Text = styled.p`
  font-family: 'Tenor Sans', sans-serif;
  font-size: 30px;

  @media (max-width: 789px) {
    font-size: 20px;
  }
`

export const HomePage = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 150px;

  @media (max-width: 789px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;

    padding: 15px 30px;
  }
`

export const Message = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  max-width: 650px;

  @media (max-width: 789px) {
    font-size: 20px;
  }
`

export const ImgPerfil = styled.img`
  width: 600px;
  border-radius: 20px;

  @media (max-width: 789px) {
    width: 300px;
  }
`
