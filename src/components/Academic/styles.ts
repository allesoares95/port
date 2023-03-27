import styled from 'styled-components'

export const Academic = styled.section`
  background-color: ${(props) => props.theme.secundary};
  color: ${(props) => props.theme.text};
  width: 100%;
  height: 100vh;

  align-items: center;
  text-align: center;
`

export const Title = styled.h1`
  padding: 50px 0 30px 0;

  @media (max-width: 869px) {
    padding: 60px 0 10px 0;
    font-size: 30px;
  }
`

export const ImgReact = styled.img`
  width: 80%;
  height: 300px;
  border-radius: 15px;

  @media (max-width: 869px) {
    width: 90%;
    height: 150px;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;

  @media (max-width: 869px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    gap: 10px;
  }
`

export const Skill = styled.div`
  background-color: ${(props) => props.theme.background};
  border: ${(props) => props.theme.menu} 3px solid;
  border-radius: 15px;
  width: 550px;
  height: 100%;

  @media (max-width: 869px) {
    width: 90%;
    height: 250px;
  }
`

export const TitleSkill = styled.h1`
  font-size: 26px;

  @media (max-width: 869px) {
    font-size: 22px;
  }
`

export const Text = styled.p`
  font-size: 20px;

  @media (max-width: 869px) {
    font-size: 16px;
  }
`
