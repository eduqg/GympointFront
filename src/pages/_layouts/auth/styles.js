import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    ${lighten(0.07, '#df4658')},
    ${lighten(0.05, '#f84e62')}
  );
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 420px;
  text-align: center;
  background-color: #fff;
  padding: 50px 50px;
  border-radius: 5px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      border: 1px solid ${lighten(0.5, '#333')};
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      background-color: #fff;
      color: #333;

      &::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }
    }

    strong {
      color: ${lighten(0.2, '#333')};
      text-transform: uppercase;
      align-self: flex-start;
      margin: 10px 0 10px;
      font-weight: bold;
    }

    button {
      margin: 10px 0 0;
      height: 44px;
      background: ${lighten(0.07, '#df4658')};
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: #df4658;
      }
    }

    a {
      color: rgba(0, 0, 0, 0.4);
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      a:hover {
        opacity: 1;
      }
    }
  }
`;
