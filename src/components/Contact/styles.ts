import styled from 'styled-components'

export const Contact = styled.div`
  width: 100%;
  height: 110vh;
  align-items: center;
  text-align: center;

  background-color: ${(props) => props.theme.secundary};
  color: ${(props) => props.theme.text};

  @media (max-width: 1020px) {
    max-height: 120vh;
  }
`

export const ContactImgForm = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  gap: 20px;

  @media (max-width: 1020px) {
    padding: 30px;
  }
`

export const TitleContact = styled.h1`
  padding: 80px 0 30px 0;
  font-size: 3rem;

  @media (max-width: 1020) {
    font-size: 2rem;
  }
`

export const TextContact = styled.p`
  padding: 40px 10px;
  font-size: 1.25rem;

  @media (max-width: 1020) {
    font-size: 0.8rem;
  }
`

export const HyperLogoContact = styled.a`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  list-style: none;
`
