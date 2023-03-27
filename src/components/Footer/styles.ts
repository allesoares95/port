import styled from 'styled-components'

export const Footer = styled.footer`
  width: 100%;
  height: 150px;
  text-align: center;
  padding: 65px 0;
  font-family: 'Poppins';

  background-color: ${(props) => props.theme.background};
`

export const Copyright = styled.p`
  color: ${(props) => props.theme.text};
  font-weight: 600;
  font-size: 24px;

  @media (max-width: 1020px) {
    font-size: 18px;
  }
`
