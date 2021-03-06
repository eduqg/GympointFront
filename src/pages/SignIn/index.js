import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/gympoint.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="logo" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <strong>Seu E-mail</strong>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <strong>Sua senha</strong>
        <Input name="password" type="password" placeholder="********" />
        <button type="submit">Entrar no Sistema</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
