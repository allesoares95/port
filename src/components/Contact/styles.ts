import styled from 'styled-components'

export const Contact = styled.div`
  max-width: 100%;
  height: 100%;
  align-items: center;
  text-align: center;

  background-color: ${(props) => props.theme.secundary};
  color: ${(props) => props.theme.text};

  @media (max-width: 1020px) {
    height: auto;
    padding: 50px 0;
  }
`

export const ContactImgForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  gap: 20px;

  @media (max-width: 1020px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }
`

export const TitleContact = styled.h1`
  padding: 80px 0 30px 0;
  font-size: 2rem;

  @media (max-width: 1020px) {
    font-size: 1.5rem;
    padding: 40px 0 20px 0;
  }
`

export const TextContact = styled.p`
  padding: 40px 10px;
  font-size: 1rem;

  @media (max-width: 1020px) {
    font-size: 0.8rem;
    padding: 20px 0;
  }
`

export const HyperLogoContact = styled.a`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  list-style: none;
`
