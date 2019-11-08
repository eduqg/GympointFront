import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Content, Items, Nav } from '../_layouts/list/styles';

import { loadAllStudentsRequest } from '../../store/modules/student/actions';

export default function Students() {
  const dispatch = useDispatch();
  const students = useSelector(state => state.student.allstudents) || [];

  useEffect(() => {
    dispatch(loadAllStudentsRequest());
  }, []); // eslint-disable-line

  return (
    <Container>
      <Content>
        <Nav>
          <strong>Gerenciar Alunos</strong>
          <Link to="/students/create">+ Cadastrar</Link>
        </Nav>
        <Items>
          <table>
            <thead>
              <tr>
                <th className="align-left">NOME</th>
                <th>E-MAIL</th>
                <th>IDADE</th>
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <th />
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id}>
                  <td className="align-left">{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.idade}</td>
                  <td>
                    <Link to={`students/${student.id}/edit`}>Editar</Link>
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
