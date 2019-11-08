import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Content, Items, Nav } from '../_layouts/list/styles';

import {
  loadAllPlansRequest,
  deletePlanRequest,
} from '../../store/modules/plans/actions';

export default function Plans() {
  const dispatch = useDispatch();
  const plans = useSelector(state => state.plan.allplans) || [];

  useEffect(() => {
    dispatch(loadAllPlansRequest());
  }, []); // eslint-disable-line

  function handleDelete(id) {
    dispatch(deletePlanRequest(id));
  }

  return (
    <Container>
      <Content>
        <Nav>
          <strong>Gerenciar Planos</strong>
          <Link to="/plans/create">+ Cadastrar</Link>
        </Nav>
        <Items>
          <table>
            <thead>
              <tr>
                <th className="align-left">TÍTULO</th>
                <th>DURAÇÂO</th>
                <th>VALOR POR MÊS</th>
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <th />
              </tr>
            </thead>
            <tbody>
              {plans.map(plan => (
                <tr key={plan.id}>
                  <td className="align-left">{plan.title}</td>
                  <td>
                    {plan.duration}
                    {plan.duration > 1 ? ' meses' : ' mês'}
                  </td>
                  <td>{plan.price}</td>
                  <td>
                    <Link to={`/plans/${plan.id}/edit`}>Editar</Link>
                    <button type="button" onClick={() => handleDelete(plan.id)}>
                      Apagar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Items>
      </Content>
    </Container>
  );
}
