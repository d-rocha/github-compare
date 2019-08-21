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
      error: false,
      loading: false
    }
  }

  handleRepositoryAdd = async (event) => {
    event.preventDefault();

    this.setState({ loading: true })

    try {
      const { data: res } = await api.get(`/repos/${this.state.repositoryInput}`);
      res.lastCommit = moment(res.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, res],
        error: false
      });

    } catch (err) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <ContainerBox>
        <img src={logo} alt="GitHub Compare" />
        <Form error={this.state.error} onSubmit={this.handleRepositoryAdd}>
          <input type="text" placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={event => this.setState({ repositoryInput: event.target.value })} />
          <button type="submit">{this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : '+'}</button>
        </Form>
        <RepositoriesList repositories={this.state.repositories} />
      </ContainerBox>

    );
  }
}
