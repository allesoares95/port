import styled from 'styled-components'

export const Contact = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  text-align: center;

  background-color: ${(props) => props.theme.secundary};
  color: ${(props) => props.theme.text};
`

export const ContactImgForm = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  gap: 20px;

  @media (max-width: 869px) {
    padding: 30px;
  }
`

export const TitleContact = styled.h1`
  padding: 80px 0 30px 0;
`

export const TextContact = styled.p`
  padding: 40px 10px;
`

export const HyperLogoContact = styled.a`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  list-style: none;
`
