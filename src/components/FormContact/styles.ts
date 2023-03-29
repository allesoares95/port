import styled from 'styled-components'

export const FormContact = styled.section``

export const DivSendEmail = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
`

export const FormEmail = styled.form`
  max-width: 500px;
  width: 80%;
  display: flex;
  flex-direction: column;
`

export const PersonsName = styled.input`
  margin-bottom: 14px;
  height: 50px;
  border-radius: 4px;
  border: 0;
  padding: 0 8px;

  border: ${(props) => props.theme.secundary} solid 3px;
`

export const PersonsEmail = styled.input`
  margin-bottom: 14px;
  height: 50px;
  border-radius: 4px;
  border: 0;
  padding: 0 8px;

  border: ${(props) => props.theme.secundary} solid 3px;
`

export const MessageSent = styled.textarea`
  margin-bottom: 14px;
  border-radius: 4px;
  border: 0;
  padding: 8px;
  height: 130px;
  resize: none;

  border: ${(props) => props.theme.secundary} solid 3px;
`

export const Send = styled.input`
  height: 34px;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  background-color: ${(props) => props.theme.menu};
  color: ${(props) => props.theme.text};
  font-size: 22px;
  font-weight: 500;
  transition: background-color, transform 0.8s;

  :hover {
    transform: scale(1.01);
  }
`
