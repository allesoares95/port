import styled from 'styled-components'

export const Project = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`

export const ProjectTitle = styled.h1`
  text-align: center;
  padding: 80px 0 30px 0;

  @media (max-width: 869px) {
    padding: 60px 0 10px 0;
    font-size: 30px;
  }
`

export const Container = styled.div``

export const Carousel = styled.div``

export const Projects = styled.div`
  width: 100%;
  max-width: 600px;

  height: 600px;
  background-color: ${(props) => props.theme.secundary};
  color: ${(props) => props.theme.text};
  text-align: center;
`

export const TimerProject = styled.div``

export const BarberProject = styled.div``

export const DtMoneyProject = styled.div``

export const HabitsProject = styled.div``

export const StreamersProject = styled.div``

export const TwtProject = styled.div``

export const NameProject = styled.h1`
  font-weight: 600;
  font-size: 48px;

  @media (max-width: 869px) {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`

export const TextProject = styled.p`
  font-size: 22px;
  padding: 15px 20px;

  @media (max-width: 869px) {
    font-size: 14px;
  }
`

export const ImgProject = styled.img`
  width: 100%;
  max-width: 500px;
  height: 300px;
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

  font-size: 20px;
  font-weight: 600;

  @media (max-width: 869px) {
    padding: 3px 70px;
    margin-bottom: 5px;
  }
`
