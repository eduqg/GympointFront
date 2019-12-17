import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Select } from '@rocketseat/unform';
import { addMonths } from 'date-fns';

import DatePicker from 'react-datepicker';
import pt from 'date-fns/locale/pt-BR';

import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { createRegistrationRequest } from '../../store/modules/registration/actions';

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

export default function RegistrationCreate() {
  const dispatch = useDispatch();
  const [start_date, setStartDate] = useState(new Date());
  const plans = useSelector(state => state.plan.allplans) || [];
  const [endDate, setEndDate] = useState(new Date());
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const [choosenPlan, setChoosenPlan] = useState(null);
  const [finalPrice, setFinalPrice] = useState(0);

  // Unform issue workaround. Options don't accept name.
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

  function handleSubmit({ student_id, plan_id }) {
    dispatch(createRegistrationRequest(student_id, plan_id, start_date));
  }

  // Atualiza plano corrente de acordo com seletor
  useEffect(() => {
    let currentPlan = {};
    if (selectedPlanId) {
      currentPlan = plans.find(item => item.id.toString() === selectedPlanId);
    }
    setChoosenPlan(currentPlan);
  }, [selectedPlanId]);// eslint-disable-line

  // Atualiza campo de data de término
  useEffect(() => {
    // Se existe um plano carregado no selector
    if (selectedPlanId) {
      setEndDate(addMonths(start_date, choosenPlan.duration));
    }
  }, [choosenPlan, start_date]); // eslint-disable-line

  // Atualiza valor final
  useEffect(() => {
    if (selectedPlanId) {
      const { price, duration } = choosenPlan;
      setFinalPrice(price * duration);
    }
  }, [choosenPlan]); // eslint-disable-line

  const priceCurrency = useMemo(() => `R$ ${finalPrice.toFixed(2)}`, [
    finalPrice,
  ]);

  return (
    <Container>
      <Content>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Nav>
            <strong>Cadastro de Matrícula</strong>
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
            <Select
              name="student_id"
              placeholder="Selecione um Aluno"
              options={students}
            />
            <InputsBelow>
              <div>
                <p>Plano</p>
                <Select
                  selected={selectedPlanId}
                  onChange={p => setSelectedPlanId(p.target.value)}
                  name="plan_id"
                  options={plans}
                  placeholder="Selecionar"
                />
              </div>
              <div>
                <p>Data de Início</p>
                <DatePicker
                  selected={start_date}
                  onChange={date => setStartDate(date)}
                  locale={pt}
                  dateFormat="P"
                  name="start_date"
                />
              </div>
              <div>
                <p>Data de Término</p>
                <DatePicker
                  name="end_date"
                  selected={endDate}
                  locale={pt}
                  dateFormat="P"
                  disabled
                />
              </div>
              <div>
                <p>Valor Final</p>
                <input name="price" value={priceCurrency} disabled />
              </div>
            </InputsBelow>
          </Box>
        </Form>
      </Content>
    </Container>
  );
}
