import React from 'react';

import { ContainerBox, ContainerRepository } from './styles';

const RepositoriesList = ({ repositories }) => (

  <ContainerBox>
    {repositories.map(repository => (
      <ContainerRepository>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>
        <ul>
          <li>{repository.stargazers_count} <small>stars</small></li>
          <li>{repository.forks_count} <small>forks</small></li>
          <li>{repository.subscribers_count} <small>subscribers</small></li>
          <li>{repository.open_issues_count} <small>open issues</small></li>
          <li>{repository.updated_at}<small>last commit</small></li>
        </ul>
      </ContainerRepository>
    ))}
  </ContainerBox>

);

export default RepositoriesList;
