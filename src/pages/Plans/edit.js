import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { MdChevronLeft, MdCheck } from 'react-icons/md';
import api from '../../services/api';

import { createPlanRequest } from '../../store/modules/plans/actions';

import {
  Container,
  Content,
  Nav,
  Box,
  InputsBelow,
} from '../_layouts/create/styles';

const schema = Yup.object().shape({
  title: Yup.string().required('Título é obrigatório'),
  duration: Yup.number().required('É necessário selecionar uma duração'),
  price: Yup.number().required('É necessário selecionar um preço.'),
});

export default function PlanEdit({ match }) {
  const dispatch = useDispatch();
  const [planDuration, setPlanDuration] = useState(0);
  const [planPrice, setPlanPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [currentPlan, setCurrentPlan] = useState([]);
  const { id } = match.params;

  useEffect(() => {
    let response = [];
    async function loadPlan() {
      response = await api.get(`/plans/${id}`);
      setCurrentPlan(response.data[0]);
    }
    loadPlan();
  }, []); //eslint-disable-line

  useEffect(() => {
    setTotal(planDuration * planPrice);
  }, [planDuration, planPrice]);

  function handleSubmit({ title, duration, price }) {
    dispatch(createPlanRequest(title, duration, price, id));
  }

  return (
    <Container>
      <Content>
        <Form initialData={currentPlan} schema={schema} onSubmit={handleSubmit}>
          <Nav>
            <strong>Edição de Plano</strong>
            <div>
              <Link to="/plans/">
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
            <p>Título do Plano</p>
            <Input name="title" />
            <InputsBelow>
              <div>
                <p>Duração</p>
                <Input
                  checked={planDuration}
                  onChange={e => setPlanDuration(e.target.value)}
                  name="duration"
                  type="number"
                  min="1"
                  step="1"
                />
              </div>
              <div>
                <p>Preço Mensal</p>
                <Input
                  checked={planPrice}
                  onChange={e => setPlanPrice(e.target.value)}
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                />
              </div>
              <div>
                <p>Preço Total</p>
                <input name="total" value={`R$ ${total}`} disabled />
              </div>
            </InputsBelow>
          </Box>
        </Form>
      </Content>
    </Container>
  );
}
