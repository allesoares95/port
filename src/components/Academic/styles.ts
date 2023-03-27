import styled from 'styled-components'

export const Academic = styled.section`
  background-color: ${(props) => props.theme.secundary};
  color: ${(props) => props.theme.text};
  width: 100%;
  height: 110vh;
  align-items: center;
  text-align: center;

  @media (max-width: 1020px) {
    height: 120vh;
  }
`

export const DivContainer = styled.div``

export const Title = styled.h1`
  padding: 100px 0 50px 0;
  font-size: 3rem;

  @media (max-width: 1020px) {
    padding: 60px 0 10px 0;
    font-size: 2rem;
  }
`

export const ImgReact = styled.img`
  width: 80%;
  height: 300px;
  border-radius: 15px;

  @media (max-width: 1020px) {
    width: 90%;
    height: 150px;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 150px;
  gap: 100px;

  @media (max-width: 1020px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    gap: 20px;
  }
`

export const Skill = styled.div`
  background-color: ${(props) => props.theme.background};
  border: ${(props) => props.theme.menu} 3px solid;
  border-radius: 15px;
  width: 430px;
  height: 550px;

  @media (max-width: 1020px) {
    width: 90%;
    height: 50%;
  }
`

export const TitleSkill = styled.h1`
  font-size: 2rem;

  @media (max-width: 1020px) {
    font-size: 1.25rem;
  }
`

export const Text = styled.p`
  font-size: 1.25rem;

  @media (max-width: 1020px) {
    font-size: 0.8rem;
  }
`
