import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input } from '@rocketseat/unform';
import { MdSearch } from 'react-icons/md';

import ControlPagination from '../../components/ControlPagination';

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
  const nextPageCount = useSelector(state => state.student.nextPageCount);
  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Initial search and page
    dispatch(loadAllStudentsRequest(null, 1));
  }, []); // eslint-disable-line

  useEffect(() => {
    if (search !== null) {
      dispatch(loadAllStudentsRequest(search, null));
    }
  }, [search]); // eslint-disable-line

  useEffect(() => {
    if (page > 0) {
      dispatch(loadAllStudentsRequest(null, page));
    }
  }, [page]); // eslint-disable-line

  function handleDelete(id) {
    const result = window.confirm('Tem certeza que deseja excluir esse campo?');
    if (result) {
      dispatch(deleteStudentRequest(id));
    }
  }

  function handleChangePage(newPage) {
    // Se estiver na primeira página, não pode voltar mais uma página
    if (newPage > 0 && nextPageCount !== 0) {
      setPage(newPage);
    }

    // Se estiver na última página e clica no botão de voltar
    if (nextPageCount === 0 && newPage < page && students.length) {
      setPage(newPage);
    }
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
          {nextPageCount < 1 && <h2>Fim</h2>}
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
