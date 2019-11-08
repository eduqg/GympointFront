import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Select } from '@rocketseat/unform';

import DatePicker from 'react-datepicker';
import pt from 'date-fns/locale/pt-BR';

import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { updateRegistrationRequest } from '../../store/modules/registration/actions';

import api from '../../services/api';

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

export default function RegistrationUpdate({ match }) {
  const dispatch = useDispatch();
  const [start_date, setStartDate] = useState(new Date());
  const [registered, setRegistered] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    async function loadProfile() {
      const response = await api.get(`registrations/${id}`);
      if (response) {
        const { start_date: start_date_effect } = response.data[0];
        const { id: plan_id } = response.data[0].plan;
        const { id: student_id } = response.data[0].student;

        const objectLoad = {
          start_date: start_date_effect,
          plan_id,
          student_id,
        };
        console.tron.log(objectLoad);
        setRegistered(objectLoad);
      }
    }

    loadProfile();
  }, []);  // eslint-disable-line

  function handleSubmit({ student_id, plan_id }) {
    console.tron.log('No handle submit', student_id, plan_id, start_date, id);
    dispatch(updateRegistrationRequest(student_id, plan_id, start_date, id));
  }

  const options = [
    { id: 1, title: 'ReactJS' },
    { id: 2, title: 'NodeJS' },
    { id: 3, title: 'React Native' },
  ];

  return (
    <Container>
      <Content>
        <Form initialData={registered} schema={schema} onSubmit={handleSubmit}>
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
            <Select name="student_id" options={options} />
            <InputsBelow>
              <div>
                <p>Plano</p>
                <Select name="plan_id" options={options} />
              </div>
              <div>
                <p>Data de Início</p>
                <DatePicker
                  name="start_date"
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
