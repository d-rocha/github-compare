import React from 'react';

import { ContainerBox, ContainerRepository } from './styles';

const RepositoriesList = () => (

  <ContainerBox>
    <ContainerRepository>
      <header>
        <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="Avatar Url" sizes="" />
        <strong>react</strong>
        <small>facebook</small>
      </header>
      <ul>
        <li>95019 <small>stars</small></li>
        <li>17891 <small>forks</small></li>
        <li>232 <small>contribuitors</small></li>
        <li>167 <small>open issues</small></li>
        <li>3 days ago <small>last commit</small></li>
      </ul>
    </ContainerRepository>
  </ContainerBox>

);

export default RepositoriesList;
