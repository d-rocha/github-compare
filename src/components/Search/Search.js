import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.png';

const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 70px;
`;

const Form = styled.form`
  padding: 30px 0 30px 0;

  input {
    flex: 1;
    padding: 0 20px;
    height: 30px;
    background: #FFF;
    font-size: 15px;
    color: #444;
    border-radius: 10px;
    border: none;
    margin-right: 5px;
  }

  button {
    padding: 0 20px;
    height: 30px;
    font-size: 12px;
    color: #FFF;
    background: #82442f;
    border-radius: 10px;
    border: none;
    font-weight: 800;

    &:hover {
      background: #89665a;
    }
  }
`;

const Main = () => (

  <ContainerBox>
    <img src={logo} alt="GitHub Compare" />

    <Form>
      <input type="text" placeholder="usuário/repositório" />
      <button type="submit">+</button>
    </Form>
  </ContainerBox>

);

export default Main;
