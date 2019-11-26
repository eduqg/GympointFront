import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { MdList } from 'react-icons/md';
import { signOut } from '../../store/modules/auth/actions';

import {
  Container,
  Content,
  Profile,
  SandwichButton,
  SandwichOptions,
  LogoLeft,
  NavSmall,
} from './styles';
import logo from '../../assets/halter.png';

import { store } from '../../store';

export default function Header() {
  const dispatch = useDispatch();
  const { signed } = useSelector(state => state.auth);
  const [showSandwich, setShowSandwich] = useState(false);

  const authName = useMemo(() => store.getState().auth.name, [signed]); // eslint-disable-line

  function handleSignOut() {
    dispatch(signOut());
    setShowSandwich(false);
  }

  function toggleSandwich() {
    setShowSandwich(!showSandwich);
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
      <NavSmall>
        <LogoLeft>
          <img src={logo} alt="gympointlogo" />
          <NavLink to="/" className="title">
            GYMPOINT
          </NavLink>
        </LogoLeft>
        <SandwichButton onClick={toggleSandwich}>
          <MdList color="rgba(0,0,0,0.4)" size={35} />
        </SandwichButton>
        {showSandwich && (
          <SandwichOptions>
            <NavLink
              to="/students"
              onClick={() => setShowSandwich(false)}
              activeStyle={{ color: '#333' }}
            >
              ALUNOS
            </NavLink>
            <NavLink
              to="/plans"
              onClick={() => setShowSandwich(false)}
              activeStyle={{ color: '#333' }}
            >
              PLANOS
            </NavLink>
            <NavLink
              to="/registrations"
              onClick={() => setShowSandwich(false)}
              activeStyle={{ color: '#333' }}
            >
              MATRÍCULAS
            </NavLink>
            <NavLink
              to="/help_orders"
              onClick={() => setShowSandwich(false)}
              activeStyle={{ color: '#333' }}
            >
              PEDIDOS DE AUXÍLIO
            </NavLink>

            <p>{authName}</p>
            <button type="button" onClick={handleSignOut}>
              Sair do sistema
            </button>
          </SandwichOptions>
        )}
      </NavSmall>
    </Container>
  );
}
