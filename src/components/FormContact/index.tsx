import { useState } from 'react'
import * as S from './styles'
import emailjs from '@emailjs/browser'

function FormContact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(event: { preventDefault: () => void }) {
    event.preventDefault()

    if (name === '' || email === '' || message === '') {
      alert('Preencha todos os campos')
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs
      .send(
        'service_ogxr63j',
        'template_x48so38',
        templateParams,
        'K50KdPFGwarnxtm1Y'
      )
      .then(
        (response) => {
          console.log('Email Enviado', response.status, response.text)
          setName('')
          setEmail('')
          setMessage('')
        },
        (err) => {
          console.log('ERROR: ', err)
        }
      )
  }

  return (
    <S.FormContact>
      <S.DivSendEmail>
        <S.FormEmail action="form" onSubmit={sendEmail}>
          <S.PersonsName
            type="text"
            className="input"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <S.PersonsEmail
            type="email"
            className="input"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <S.MessageSent
            className="textarea"
            placeholder="Digite sua mensagem"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <S.Send className="button" type="submit" value="enviar" />
        </S.FormEmail>
      </S.DivSendEmail>
    </S.FormContact>
  )
}

export default FormContact
