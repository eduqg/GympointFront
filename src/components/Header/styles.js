import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      display: flex;
      width: 70px;
    }

    a {
      display: flex;
      align-items: center;
      font-weight: bold;
      height: 35px;
      padding-left: 16px;
      padding-right: 16px;
      color: ${lighten(0.5, '#333')};
    }

    a.title {
      color: #f84e62;
      padding-right: 24px;
      padding-left: 32px;
      border-right: 1px solid #eee;
    }
  }
`;

export const Profile = styled.div`
  position: relative;
  right: 0;
  margin-left: 24px;
  padding-left: 24px;
  text-align-last: end;
  min-width: 200px;
  font-size: 12px;
  margin-right: 10px;

  a {
    display: block;
    margin-top: 2px;
    color: #999;
  }

  button {
    font-size: 12px;
    border: 0;
    color: #df4658;
    background: #fff;
  }
`;
