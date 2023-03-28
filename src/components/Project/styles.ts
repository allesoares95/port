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
    padding: 60px 0 10px 0;
    font-size: 1.25rem;
  }
`

export const ProjectComponents = styled.div`
  @media (max-width: 1020px) {
    width: 100%;
    height: 500px;
    padding-top: 60px;
  }
`

export const Projects = styled.div`
  width: 100%;
  max-width: 600px;
  height: 500px;
  background-color: ${(props) => props.theme.secundary};
  color: ${(props) => props.theme.text};
  text-align: center;

  @media (max-width: 1020px) {
    width: 100%;
  }
`

export const TimerProject = styled.div``

export const BarberProject = styled.div``

export const DtMoneyProject = styled.div``

export const HabitsProject = styled.div``

export const StreamersProject = styled.div``

export const TwtProject = styled.div``

export const NameProject = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;

  @media (max-width: 1020px) {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 10px;
  }
`

export const TextProject = styled.p`
  font-size: 1rem;
  padding: 15px 20px;

  @media (max-width: 1020px) {
    font-size: 0.8rem;
  }
`

export const ImgProject = styled.img`
  width: 100%;
  max-width: 200px;
  height: 180px;
  border-radius: 10px;

  @media (max-width: 400px) {
    width: 300px;
    height: 300px;
  }
`

export const AcessProject = styled.a`
  padding: 10px 100px;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.background};

  font-size: 1rem;
  font-weight: 600;

  @media (max-width: 1020px) {
    padding: 3px 70px;
    margin-bottom: 5px;
  }
`
