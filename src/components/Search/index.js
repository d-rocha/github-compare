import React from 'react';
import { ContainerBox, Form } from './styles';
import RepositoriesList from '../RepositoriesList';

import logo from '../../assets/logo.png';

const Main = () => (

  <ContainerBox>
    <img src={logo} alt="GitHub Compare" />

    <Form>
      <input type="text" placeholder="usuário/repositório" />
      <button type="submit">+</button>
    </Form>

    <RepositoriesList />
  </ContainerBox>



);

export default Main;
