import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  padding-top: 32px;
  display: flex;
  justify-content: center;
  background-color: #eee;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1000px;
`;

export const Nav = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  text-align: center;
  align-items: center;

  strong {
    font-size: 24px;
    color: #333;
  }

  div {
    display: flex;
    flex-direction: row;
  }

  a {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    background: ${lighten(0.6, '#333')};
    border-radius: 3px;
    color: #fff;
    height: 32px;
    font-size: 12px;
    font-weight: bold;
    width: 100px;
    justify-content: center;
  }

  button {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    background: #df4658;
    border-radius: 3px;
    color: #fff;
    height: 32px;
    font-size: 12px;
    font-weight: bold;
    border: 0;
    margin-left: 16px;
    width: 100px;
    justify-content: center;
  }
`;

export const Box = styled.div`
  padding: 20px 40px;
  background-color: #fff;
  border-radius: 5px;
  width: 100%;

  input {
    width: 100%;
    border: 1px solid ${lighten(0.6, '#333')};
    height: 32px;
    border-radius: 5px;
    color: ${lighten(0.1, '#333')};
    text-align: left;
  }
`;

export const InputsBelow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;

  select {
    width: 200px;
    border: 1px solid ${lighten(0.6, '#333')};
    background: #fff;
    border-radius: 5px;
    color: ${lighten(0.1, '#333')};
    height: 32px;
  }

  input {
    width: 200px;
    border: 1px solid ${lighten(0.6, '#333')};
    height: 32px;
    border-radius: 5px;
    color: ${lighten(0.3, '#333')};
    text-align: center;
  }
`;
