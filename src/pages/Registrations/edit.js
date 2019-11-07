import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Select } from '@rocketseat/unform';
import { MdChevronLeft, MdCheck } from 'react-icons/md';

// import DatePicker from 'react-datepicker';

import {
  Container,
  Content,
  Nav,
  Box,
  InputsBelow,
} from '../_layouts/create/styles';

export default function RegistrationEdit() {
  function handleSubmit({ name, plan, start_date }) {
    console.tron.log(name, plan, start_date);
  }

  const options = [
    { id: 'react', title: 'ReactJS' },
    { id: 'node', title: 'NodeJS' },
    { id: 'rn', title: 'React Native' },
  ];

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Nav>
            <strong>Edição de Matrícula</strong>
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
            <p>Aluno</p>
            <Input name="name" />
            <InputsBelow>
              <div>
                <p>Plano</p>
                <Select name="plan" options={options} />
              </div>
              <div>
                <p>Data de Início</p>
                {/* <DatePicker name="start_date" /> */}
              </div>
              <div>
                <p>Data de Término</p>
                <input name="enddate" value="10/05/2019" disabled />
              </div>
              <div>
                <p>Valor Final</p>
                <input name="price" value="R$ 990,00" disabled />
              </div>
            </InputsBelow>
          </Box>
        </Form>
      </Content>
    </Container>
  );
}
