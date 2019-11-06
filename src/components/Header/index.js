import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logo from '../../assets/gympoint.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="gympointlogo" />
          <NavLink to="/" className="title">
            {' '}
            GYMPOINT
          </NavLink>
          <NavLink to="/students" activeStyle={{ color: '#333' }}>
            ALUNOS
          </NavLink>
          <NavLink to="/plans" activeStyle={{ color: '#333' }}>
            PLANOS
          </NavLink>
          <NavLink to="/registers" activeStyle={{ color: '#333' }}>
            MATRÍCULAS
          </NavLink>
          <NavLink to="/help_orders" activeStyle={{ color: '#333' }}>
            PEDIDOS DE AUXÍLIO
          </NavLink>
        </nav>
        <Profile>
          <NavLink to="/register">Eduardo Quintino</NavLink>
          <NavLink to="/register" className="sair">
            Sair do sistema
          </NavLink>
        </Profile>
      </Content>
    </Container>
  );
}
