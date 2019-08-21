import React from 'react';
import PropTypes from 'prop-types';

import { ContainerBox, ContainerRepository } from './styles';

const RepositoriesList = ({ repositories }) => (

  <ContainerBox>
    {repositories.map(repository => (
      <ContainerRepository key={repository.id}>
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
          <li>{repository.pushed_at}<small>last commit</small></li>
        </ul>
      </ContainerRepository>
    ))}
  </ContainerBox>

);

RepositoriesList.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string
    }),
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    subscribers_count: PropTypes.number,
    open_issues_count: PropTypes.number,
    pushed_at: PropTypes.string
  })).isRequired,
}
export default RepositoriesList;
