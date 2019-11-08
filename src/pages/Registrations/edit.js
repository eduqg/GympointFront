import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Select } from '@rocketseat/unform';

import DatePicker from 'react-datepicker';
import pt from 'date-fns/locale/pt-BR';

import { MdChevronLeft, MdCheck } from 'react-icons/md';

import { updateRegistrationRequest } from '../../store/modules/registration/actions';

import { loadAllPlansRequest } from '../../store/modules/plans/actions';
import { loadAllStudentsRequest } from '../../store/modules/student/actions';

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
  const { id } = match.params;
  const plans = useSelector(state => state.plan.allplans) || [];
  const students =
    useSelector(state => {
      const titledStudents = state.student.allstudents.map(s => {
        const newTitled = {
          id: s.id,
          title: s.name,
        };
        return newTitled;
      });
      return titledStudents;
    }) || [];

  useEffect(() => {
    dispatch(loadAllPlansRequest());
    dispatch(loadAllStudentsRequest());
  }, []);  // eslint-disable-line

  const oneregistration = useSelector(state => {
    return state.registration.allregistrations.find(item => {
      return item.id.toString() === id;
    });
  }) || { student_id: '1', plan_id: '1', start_date: '10/10/2020' };

  function handleSubmit({ student_id, plan_id }) {
    console.tron.log('No handle submit', student_id, plan_id, start_date, id);
    dispatch(updateRegistrationRequest(student_id, plan_id, start_date, id));
  }

  return (
    <Container>
      <Content>
        <Form
          initialData={oneregistration}
          schema={schema}
          onSubmit={handleSubmit}
        >
          <Nav>
            <strong>Edição de Matrícula</strong>
            <div>
              <Link to="/registrations/">
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
            <Select name="student_id" options={students} />
            <InputsBelow>
              <div>
                <p>Plano</p>
                <Select name="plan_id" options={plans} />
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
