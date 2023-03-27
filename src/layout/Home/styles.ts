import styled from 'styled-components'

export const Home = styled.main`
  width: 100%;
  height: 100vh;
  background-color: url('/img/background.jpg');
  color: ${(props) => props.theme.text};
  padding-top: 100px;

  @media (max-width: 869px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
  }
`

export const TitleDiv = styled.div`
  transition: transform;
  padding: 0 50px;

  @media (max-width: 869px) {
    padding: 10px 20px;
  }
`

export const Title = styled.h1`
  font-family: 'Noto Serif JP', sans-serif;
  font-size: 2rem;

  @media (max-width: 869px) {
    font-size: 1.5rem;
  }
`

export const Text = styled.p`
  font-family: 'Tenor Sans', sans-serif;
  font-size: 1.25rem;

  @media (max-width: 869px) {
    font-size: 0.8rem;
  }
`

export const HomePage = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  width: 90%;
  padding: 0 60px;
  margin: 0 auto;

  @media (max-width: 869px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    padding: 15px 30px;
    gap: 40px;
  }
`

export const Message = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  max-width: 650px;

  @media (max-width: 869px) {
    font-size: 20px;
  }
`
