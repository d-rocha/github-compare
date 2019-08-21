import React, { Component } from 'react';
import api from '../../services/api';
import moment from 'moment';
import RepositoriesList from '../RepositoriesList';

import logo from '../../assets/logo.png';

import { ContainerBox, Form } from './styles';

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repositoryInput: '',
      repositories: [],
    }
  }

  handleRepositoryAdd = async (event) => {
    event.preventDefault();
    try {
      const { data: res } = await api.get(`/repos/${this.state.repositoryInput}`);
      res.lastCommit = moment(res.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, res],
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (

      <ContainerBox>
        <img src={logo} alt="GitHub Compare" />
        <Form onSubmit={this.handleRepositoryAdd}>
          <input type="text" placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={event => this.setState({ repositoryInput: event.target.value })} />
          <button type="submit">+</button>
        </Form>
        <RepositoriesList repositories={this.state.repositories} />
      </ContainerBox>

    );
  }
}
