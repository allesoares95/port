import styled from 'styled-components'

export const Project = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`

export const ProjectTitle = styled.h1`
  text-align: center;
  padding: 100px 0 50px 0;
  font-size: 2rem;

  @media (max-width: 1020px) {
    padding: 50px 0;
  }
`

export const ProjectComponents = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1020px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Projects = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const NameProject = styled.h2`
  font-size: 2rem;
  margin-top: 10px;
  margin-bottom: 20px;
`

export const ImgProject = styled.img`
  width: 90%;
  max-width: 450px;
  height: 300px;
  margin-bottom: 20px;

  @media (max-width: 1020px) {
    height: 200px;
  }
`

export const TextProject = styled.p`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.2rem;

  @media (max-width: 1020px) {
    font-size: 0.8rem;
  }
`

export const AcessProject = styled.a`
  text-align: center;
  background-color: ${(props) => props.theme.menu};
  color: ${(props) => props.theme.text};
  padding: 10px 60px;
  border-radius: 10px;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.secundary};
  }
`

export const TimerProject = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  @media (max-width: 1020px) {
    padding: 0;
  }
`

export const TwtProject = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  @media (max-width: 1020px) {
    padding: 0;
  }
`

export const DtMoneyProject = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  @media (max-width: 1020px) {
    padding: 0;
  }
`

export const HabitsProject = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  @media (max-width: 1020px) {
    padding: 0;
  }
`

export const StreamersProject = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  @media (max-width: 1020px) {
    padding: 0;
  }
`

export const BarberProject = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  @media (max-width: 1020px) {
    padding: 0;
  }
`
