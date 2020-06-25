import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/example/action';

export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotao());
  }

  return (
    <Container>
      <Title>
        Login
        <small>oie</small>
      </Title>
      <Paragrafo>Lorem</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
