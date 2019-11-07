import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Items, Nav } from '../_layouts/list/styles';

export default function Student() {
  return (
    <Container>
      <Content>
        <Nav>
          <strong>Gerenciar Planos</strong>
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
              <tr>
                <td className="align-left">name</td>
                <td>email</td>
                <td>idade</td>
                <td>
                  <Link to="/">Editar</Link>
                  <button type="button">Apagar</button>
                </td>
              </tr>
              <tr>
                <td className="align-left">name</td>
                <td>email</td>
                <td>idade</td>
                <td>
                  <Link to="/">Editar</Link>
                  <button type="button">Apagar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </Items>
      </Content>
    </Container>
  );
}
