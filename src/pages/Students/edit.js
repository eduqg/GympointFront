import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import * as Yup from 'yup';

import { updateStudentRequest } from '../../store/modules/student/actions';

import {
  Container,
  Content,
  Nav,
  Box,
  InputsBelow,
} from '../_layouts/create/styles';

export default function StudentEdit({ match }) {
  const dispatch = useDispatch();
  const { id } = match.params;
  const onestudent = useSelector(state => {
    return state.student.allstudents.find(item => {
      return item.id.toString() === id;
    });
  }) || { name: 'Nome', email: 'Email', idade: 1, peso: 1, altura: 1 };

  function handleSubmit({ name, email, idade, peso, altura }) {
    dispatch(updateStudentRequest(name, email, idade, peso, altura, id));
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
      .email()
      .required('Email inválido'),
    idade: Yup.number().required('É necessário selecionar uma idade.'),
    peso: Yup.number().required('É necessário selecionar um peso.'),
    altura: Yup.number().required('É necessário selecionar uma altura.'),
  });

  return (
    <Container>
      <Content>
        <Form initialData={onestudent} schema={schema} onSubmit={handleSubmit}>
          <Nav>
            <strong>Edição de aluno</strong>
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
            <Input name="name" />
            <p>Endereço de e-mail</p>
            <Input name="email" />
            <InputsBelow>
              <div>
                <p>Idade</p>
                <Input name="idade" type="number" min="1" step="1" />
              </div>
              <div>
                <p>Peso</p>
                <Input name="peso" type="number" step="0.1" min="0" />
              </div>
              <div>
                <p>Altura</p>
                <Input name="altura" type="number" step="0.01" min="0" />
              </div>
            </InputsBelow>
          </Box>
        </Form>
      </Content>
    </Container>
  );
}
