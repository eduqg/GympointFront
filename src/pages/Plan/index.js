import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Items, Nav } from '../_layouts/list/styles';

export default function Plan() {
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
                <th className="align-left">TÍTULO</th>
                <th>DURAÇÂO</th>
                <th>VALOR POR MÊS</th>
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="align-left">Start</td>
                <td>1 mes</td>
                <td>$100</td>
                <td>
                  <Link to="/">Editar</Link>
                  <button type="button">Apagar</button>
                </td>
              </tr>
              <tr>
                <td className="align-left">Start</td>
                <td>1 mes</td>
                <td>$100</td>
                <td>
                  <Link to="/">Editar</Link>
                  <button type="button">Apagar</button>
                </td>
              </tr>
              <tr>
                <td className="align-left">Start</td>
                <td>1 mes</td>
                <td>$100</td>
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
