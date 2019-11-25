import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signOut } from '../../store/modules/auth/actions';

import { Container, Content, Profile } from './styles';
import logo from '../../assets/halter.png';

import { store } from '../../store';

export default function Header() {
  const dispatch = useDispatch();
  const { signed } = useSelector(state => state.auth);

  const authName = useMemo(() => store.getState().auth.name, [signed]); // eslint-disable-line

  function handleSignOut() {
    dispatch(signOut());
  }

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
          <NavLink to="/registrations" activeStyle={{ color: '#333' }}>
            MATRÍCULAS
          </NavLink>
          <NavLink to="/help_orders" activeStyle={{ color: '#333' }}>
            PEDIDOS DE AUXÍLIO
          </NavLink>
        </nav>
        <Profile>
          <NavLink to="/register">{authName}</NavLink>
          <button type="button" onClick={handleSignOut}>
            Sair do sistema
          </button>
        </Profile>
      </Content>
    </Container>
  );
}
