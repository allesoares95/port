import styled from 'styled-components'

export const Academic = styled.section`
  background-color: ${(props) => props.theme.secundary};
  color: ${(props) => props.theme.text};
  width: 100%;
  height: auto;
  align-items: center;
  text-align: center;

  @media (max-width: 1020px) {
    height: auto;
    padding: 50px 0;
  }
`

export const DivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 50px;

  @media (max-width: 1020px) {
    flex-direction: column;
    padding: 20px;
    gap: 40px;
  }
`

export const Title = styled.h1`
  padding: 100px 0 50px 0;
  font-size: 2rem;

  @media (max-width: 1020px) {
    padding: 30px 0 10px 0;
    font-size: 1.25rem;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  width: 100%;

  @media (max-width: 1020px) {
    flex-direction: column;
    gap: 40px;
  }
`

export const Skill = styled.div`
  background-color: ${(props) => props.theme.background};
  border: ${(props) => props.theme.menu} 3px solid;
  border-radius: 15px;
  width: 430px;
  height: 550px;
  margin-bottom: 20px;

  @media (max-width: 1020px) {
    width: 90%;
    height: auto;
  }
`

export const TitleSkill = styled.h1`
  font-size: 1.5rem;

  @media (max-width: 1020px) {
    font-size: 1rem;
  }
`

export const Text = styled.p`
  font-size: 1rem;

  @media (max-width: 1020px) {
    font-size: 0.8rem;
  }
`
