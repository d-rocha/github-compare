import React, { Component } from 'react';
import api from '../../services/api';
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
      const res = await api.get(`/repos/${this.state.repositoryInput}`);
      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, res.data],
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
