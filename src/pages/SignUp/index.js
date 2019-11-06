import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import logo from '../../assets/gympoint.svg';

import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="logo" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <strong>Nome</strong>
        <Input name="name" placeholder="Seu nome" />
        <strong>E-mail</strong>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <strong>Senha</strong>
        <Input name="password" type="password" placeholder="********" />
        <button type="submit">Cadastrar</button>
        <Link to="/">Faça Login</Link>
      </Form>
    </>
  );
}
