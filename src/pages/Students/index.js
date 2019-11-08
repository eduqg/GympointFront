import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input } from '@rocketseat/unform';
import { MdSearch } from 'react-icons/md';
import {
  Container,
  Content,
  Items,
  Nav,
  BoxIcon,
} from '../_layouts/list/styles';
import {
  loadAllStudentsRequest,
  deleteStudentRequest,
} from '../../store/modules/student/actions';

export default function Students() {
  const dispatch = useDispatch();
  const students = useSelector(state => state.student.allstudents) || [];
  const [search, setSearch] = useState(null);

  useEffect(() => {
    dispatch(loadAllStudentsRequest());
  }, []); // eslint-disable-line

  useEffect(() => {
    if (search !== null) {
      dispatch(loadAllStudentsRequest(search));
    }
  }, [search]); // eslint-disable-line

  function handleDelete(id) {
    dispatch(deleteStudentRequest(id));
  }

  return (
    <Container>
      <Content>
        <Nav>
          <strong>Gerenciar Alunos</strong>
          <div>
            <Link to="/students/create">+ Cadastrar</Link>
            <BoxIcon>
              <MdSearch color="#999" size={20} />
            </BoxIcon>
            <Input
              checked={search}
              onChange={e => setSearch(e.target.value)}
              name="search"
              type="text"
              placeholder="Buscar aluno"
            />
          </div>
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
                    <button
                      type="button"
                      onClick={() => handleDelete(student.id)}
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
