import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Content, Items, Nav } from '../_layouts/list/styles';

import ControlPagination from '../../components/ControlPagination';

import {
  loadAllPlansRequest,
  deletePlanRequest,
} from '../../store/modules/plans/actions';

export default function Plans() {
  const dispatch = useDispatch();
  const plans = useSelector(state => state.plan.allplans) || [];
  const nextPageCount = useSelector(state => state.plan.nextPageCount);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(loadAllPlansRequest(1));
  }, []); // eslint-disable-line

  useEffect(() => {
    if (page > 0) {
      dispatch(loadAllPlansRequest(page));
    }
  }, [page]); // eslint-disable-line

  function handleDelete(id) {
    const result = window.confirm('Tem certeza que deseja excluir esse campo?');
    if (result) {
      dispatch(deletePlanRequest(id));
    }
  }

  function handleChangePage(newPage) {
    // Voltar página
    if (newPage < page && newPage > 0) {
      setPage(newPage);
    }

    // Avançar página
    if (newPage > page && nextPageCount !== 0) {
      setPage(newPage);
    }
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
          {nextPageCount < 1 && <h2>Fim das matrículas</h2>}
        </Items>

        <ControlPagination
          objectLength={nextPageCount}
          page={page}
          handleChangePage={handleChangePage}
        />
      </Content>
    </Container>
  );
}
