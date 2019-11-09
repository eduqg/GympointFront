import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Select } from '@rocketseat/unform';
import { parseISO, addMonths } from 'date-fns';
import PropTypes from 'prop-types';

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
  const [endDate, setEndDate] = useState(new Date());
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const [choosenPlan, setChoosenPlan] = useState(null);
  const [finalPrice, setFinalPrice] = useState(0);
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

  const oneregistration = useSelector(state => {
    return state.registration.allregistrations.find(item => {
      return item.id.toString() === id;
    });
  }) || { student_id: '1', plan_id: '1', start_date: '10/10/2020' };

  // Carrega planos e estudantes a serem utilizados
  useEffect(() => {
    dispatch(loadAllPlansRequest());
    dispatch(loadAllStudentsRequest());
  }, []);  // eslint-disable-line

  // Atualiza plano corrente de acordo com seletor
  useEffect(() => {
    let currentPlan = {};
    if (selectedPlanId) {
      currentPlan = plans.find(item => item.id.toString() === selectedPlanId);
    } else {
      currentPlan = plans.find(item => item.id === oneregistration.plan_id);
    }
    setChoosenPlan(currentPlan);
  }, [selectedPlanId]);// eslint-disable-line

  // Carrega primeiro valor data de inicio e data final
  useEffect(() => {
    setStartDate(parseISO(oneregistration.start_date));
    setEndDate(parseISO(oneregistration.end_date));
  },[]); // eslint-disable-line

  // Atualiza campo de data de término
  useEffect(() => {
    if (choosenPlan) {
      setEndDate(addMonths(start_date, choosenPlan.duration));
    }
  }, [choosenPlan, start_date]); // eslint-disable-line

  // Atualiza campo de valor final
  useEffect(() => {
    if (choosenPlan) {
      setFinalPrice(choosenPlan.duration * choosenPlan.price);
    }
  }, [choosenPlan]); // eslint-disable-line

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
                <Select
                  selected={selectedPlanId}
                  onChange={p => setSelectedPlanId(p.target.value)}
                  name="plan_id"
                  options={plans}
                />
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
                <DatePicker
                  name="enddate"
                  selected={endDate}
                  locale={pt}
                  dateFormat="P"
                  disabled
                />
              </div>
              <div>
                <p>Valor Final</p>
                <input name="price" value={`R$ ${finalPrice}`} disabled />
              </div>
            </InputsBelow>
          </Box>
        </Form>
      </Content>
    </Container>
  );
}

RegistrationUpdate.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
