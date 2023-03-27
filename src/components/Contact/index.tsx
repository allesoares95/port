import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import FormContact from 'components/FormContact'
import * as S from './styles'

const Contact = () => (
  <S.Contact>
    <S.TitleContact>Contact</S.TitleContact>
    <S.TextContact>
      Entre contato comigo pelas redes sociais ou e-mail
    </S.TextContact>

    <S.HyperLogoContact href="https://github.com/allesoares95">
      <GithubLogo size={70} />
    </S.HyperLogoContact>

    <S.HyperLogoContact href="https://www.linkedin.com/in/allesoares/">
      <LinkedinLogo size={70} />
    </S.HyperLogoContact>

    <FormContact />
  </S.Contact>
)

export default Contact
