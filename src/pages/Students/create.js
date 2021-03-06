import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import * as Yup from 'yup';

import { createStudentRequest } from '../../store/modules/student/actions';

import {
  Container,
  Content,
  Nav,
  Box,
  InputsBelow,
} from '../_layouts/create/styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email()
    .required('Email inválido'),
  idade: Yup.number().required('É necessário selecionar uma idade.'),
  peso: Yup.number().required('É necessário selecionar um peso.'),
  altura: Yup.number().required('É necessário selecionar uma altura.'),
});

export default function StudentCreate() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, idade, peso, altura }) {
    dispatch(createStudentRequest(name, email, idade, peso, altura));
  }

  return (
    <Container>
      <Content>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Nav>
            <strong>Criar aluno</strong>
            <div>
              <Link to="/students/">
                <MdChevronLeft size={24} color="#fff" />
                Voltar
              </Link>
              <button type="submit">
                <MdCheck size={24} color="#fff" />
                Salvar
              </button>
            </div>
          </Nav>
          <Box>
            <p>Nome Completo</p>
            <Input
              name="name"
              autoComplete="off"
              placeholder="Nome completo"
              onFocus={e => {
                e.target.placeholder = '';
              }}
              onBlur={e => {
                e.target.placeholder = 'Nome completo';
              }}
            />
            <p>Endereço de e-mail</p>
            <Input
              name="email"
              autoComplete="off"
              placeholder="Digite o endereço de email"
              onFocus={e => {
                e.target.placeholder = '';
              }}
              onBlur={e => {
                e.target.placeholder = 'Digite o endereço de email';
              }}
            />
            <InputsBelow>
              <div>
                <p>Idade</p>
                <Input
                  name="idade"
                  type="number"
                  placeholder="Digite a idade"
                  min="1"
                  step="1"
                  autoComplete="off"
                  onFocus={e => {
                    e.target.placeholder = '';
                  }}
                  onBlur={e => {
                    e.target.placeholder = 'Digite a idade';
                  }}
                />
              </div>
              <div>
                <p>Peso</p>
                <Input
                  name="peso"
                  type="number"
                  placeholder="Digite o peso"
                  step="0.1"
                  min="0"
                  autoComplete="off"
                  onFocus={e => {
                    e.target.placeholder = '';
                  }}
                  onBlur={e => {
                    e.target.placeholder = 'Digite o peso';
                  }}
                />
              </div>
              <div>
                <p>Altura</p>
                <Input
                  name="altura"
                  type="number"
                  placeholder="Digite a altura"
                  step="0.01"
                  min="0"
                  autoComplete="off"
                  onFocus={e => {
                    e.target.placeholder = '';
                  }}
                  onBlur={e => {
                    e.target.placeholder = 'Digite a altura';
                  }}
                />
              </div>
            </InputsBelow>
          </Box>
        </Form>
      </Content>
    </Container>
  );
}
