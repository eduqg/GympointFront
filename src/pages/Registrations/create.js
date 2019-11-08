import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Select } from '@rocketseat/unform';

import DatePicker from 'react-datepicker';
import pt from 'date-fns/locale/pt-BR';

import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { createRegistrationRequest } from '../../store/modules/registration/actions';

import {
  Container,
  Content,
  Nav,
  Box,
  InputsBelow,
} from '../_layouts/create/styles';

const schema = Yup.object().shape({
  student_id: Yup.string().required('Estudante é obrigatório'),
  plan_id: Yup.string().required('É necessário selecionar um plano'),
});

export default function RegistrationCreate() {
  const dispatch = useDispatch();
  const [start_date, setStartDate] = useState(new Date());

  function handleSubmit({ student_id, plan_id }) {
    dispatch(createRegistrationRequest(student_id, plan_id, start_date));
  }

  const options = [
    { id: 1, title: 'ReactJS' },
    { id: 2, title: 'NodeJS' },
    { id: 3, title: 'React Native' },
  ];

  return (
    <Container>
      <Content>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Nav>
            <strong>Cadastro de Matrícula</strong>
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
            <Select name="student_id" options={options} />
            <InputsBelow>
              <div>
                <p>Plano</p>
                <Select name="plan_id" options={options} />
              </div>
              <div>
                <p>Data de Início</p>
                <DatePicker
                  selected={start_date}
                  onChange={date => setStartDate(date)}
                  locale={pt}
                  dateFormat="P"
                />
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
