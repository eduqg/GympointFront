import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Items, Nav } from '../_layouts/list/styles';

import api from '../../services/api';

export default function Plans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');

      setPlans(response.data);
    }
    loadPlans();
  }, [plans]);

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
                <tr>
                  <td className="align-left">{plan.title}</td>
                  <td>
                    {plan.duration}
                    {plan.duration > 1 ? ' meses' : ' mês'}
                  </td>
                  <td>{plan.price}</td>
                  <td>
                    <Link to="/">Editar</Link>
                    <button type="button">Apagar</button>
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
