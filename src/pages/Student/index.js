import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Content, Items, Nav } from '../_layouts/list/styles';
import api from '../../services/api';

export default function Student() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('/students');

      setStudents(response.data);
    }

    loadStudents();
  }, [students]);

  return (
    <Container>
      <Content>
        <Nav>
          <strong>Gerenciar Alunos</strong>
          <Link to="/">+ Cadastrar</Link>
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
