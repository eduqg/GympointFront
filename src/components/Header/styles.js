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

  @media only screen and (max-width: 768px) {
    display: none;
  }

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

export const NavSmall = styled.div`
  @media only screen and (min-width: 769px) {
    display: none;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  height: 65px;
  justify-content: space-between;
`;

export const LogoLeft = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  border-right: 1px solid #eee;

  a {
    font-weight: bold;
    color: #f84e62;
    padding-left: 8px;
  }

  img {
    height: 30px;
  }
`;
export const SandwichButton = styled.button`
  background: #fff;
  border-width: 0px;
  padding: 5px;
`;

export const SandwichOptions = styled.div`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);

  position: absolute;
  top: 50px;
  right: 10px;

  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px 30px;

  a {
    line-height: 40px;
    font-weight: bold;
    color: #f84e62;
  }

  p {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 10px 0;
    text-align: center;
    font-weight: bold;
  }

  button {
    background: #f84e62;
    padding: 8px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    margin-bottom: 10px;
  }
`;
