import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { Container, Content, Items, Nav } from '../_layouts/list/styles';

import {
  loadAllRegistrationsRequest,
  deleteRegistrationRequest,
} from '../../store/modules/registration/actions';

export default function Registrations() {
  const dispatch = useDispatch();
  const registrations =
    useSelector(state => state.registration.allregistrations) || [];

  useEffect(() => {
    console.tron.log('usando efeito');
    dispatch(loadAllRegistrationsRequest());
  }, []); // eslint-disable-line

  function formatDate(date) {
    const formattedDate = format(parseISO(date), "'Dia' dd 'de' MMMM'", {
      locale: pt,
    });
    return formattedDate;
  }

  function handleDelete(id) {
    dispatch(deleteRegistrationRequest(id));
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
        </Items>
      </Content>
    </Container>
  );
}
