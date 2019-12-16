import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { Container, Content, Items, Nav } from '../_layouts/list/styles';

import ControlPagination from '../../components/ControlPagination';

import {
  loadAllRegistrationsRequest,
  deleteRegistrationRequest,
} from '../../store/modules/registration/actions';

export default function Registrations() {
  const dispatch = useDispatch();
  const registrations =
    useSelector(state => state.registration.allregistrations) || [];
  const nextPageCount = useSelector(state => state.registration.nextPageCount);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(loadAllRegistrationsRequest(1));
  }, []); // eslint-disable-line

  useEffect(() => {
    if (page > 0) {
      dispatch(loadAllRegistrationsRequest(page));
    }
  }, [page]); // eslint-disable-line

  useEffect(() => { }, [registrations]); // eslint-disable-line

  function formatDate(date) {
    const formattedDate = format(parseISO(date), "'Dia' dd 'de' MMMM'", {
      locale: pt,
    });
    return formattedDate;
  }

  function handleDelete(id) {
    const result = window.confirm('Tem certeza que deseja excluir esse campo?');
    if (result) {
      dispatch(deleteRegistrationRequest(id));
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
          <strong>Gerenciar Matrículas</strong>
          <Link to="/registrations/create">+ Cadastrar</Link>
        </Nav>
        <Items>
          <table>
            <thead>
              <tr>
                <th className="align-left">ALUNO</th>
                <th>PLANO</th>
                <th>INÍCIO</th>
                <th>TÉRMINO</th>
                <th>ATIVA</th>
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <th />
              </tr>
            </thead>
            <tbody>
              {registrations.map(registration => (
                <tr key={registration.id}>
                  <td className="align-left">{registration.student.name}</td>
                  <td>{registration.plan.title}</td>
                  <td>{formatDate(registration.start_date)}</td>
                  <td>{formatDate(registration.end_date)}</td>
                  <td>{registration.active ? 'Sim' : 'Não'}</td>
                  <td>
                    <Link to={`registrations/${registration.id}/edit`}>
                      Editar
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDelete(registration.id)}
                    >
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
