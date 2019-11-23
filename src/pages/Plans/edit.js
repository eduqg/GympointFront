import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { MdChevronLeft, MdCheck } from 'react-icons/md';

import { updatePlanRequest } from '../../store/modules/plans/actions';

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
  const { id } = match.params;
  const oneplan = useSelector(state => {
    return state.plan.allplans.find(item => {
      return item.id.toString() === id;
    });
  }) || { title: 'Digite um plano', duration: 1, price: 1 };

  useEffect(() => {
    if (planDuration || planPrice) {
      setTotal(
        (planDuration || oneplan.duration) * (planPrice || oneplan.price)
      );
    } else {
      setTotal(oneplan.duration * oneplan.price);
    }
  }, [planDuration, planPrice]); // eslint-disable-line

  function handleSubmit({ title, duration, price }) {
    dispatch(updatePlanRequest(title, duration, price, id));
  }

  const priceCurrency = useMemo(() => `R$ ${total.toFixed(2)}`, [total]);

  return (
    <Container>
      <Content>
        <Form initialData={oneplan} schema={schema} onSubmit={handleSubmit}>
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
                  autoComplete="off"
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
                  placeholder="R$ 0.00"
                  autoComplete="off"
                />
              </div>
              <div>
                <p>Preço Total</p>
                <input name="total" value={priceCurrency} disabled />
              </div>
            </InputsBelow>
          </Box>
        </Form>
      </Content>
    </Container>
  );
}

PlanEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
