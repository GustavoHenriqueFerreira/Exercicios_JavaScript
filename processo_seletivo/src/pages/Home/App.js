import './App.css';

import { Component } from 'react';

export default class RepositoriosUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaRepositorios: [],
      nomeUsuario: '',
      idRepos: 0,
      nomeRepos: '',
      descricaoRepos: '',
      dataCriacao: '',
      tamanhoRepos: 0,
    };
  };

  atualizaEstadoTitulo = async (event) => {

    this.setState({
      nomeUsuario: event.target.value
    });

  }

  buscarRepositorios = (event) => {
    event.preventDefault();

    /*Listar os 10 primeiros fetch(`https://api.github.com/users/${this.state.nomeUsuario}/repos?page=1&per_page=10`) */
    /*Listar os 10 últimos atualizados fetch(`https://api.github.com/users/${this.state.nomeUsuario}/repos?per_page=10&sort=updated`) */
    fetch(`https://api.github.com/users/${this.state.nomeUsuario}/repos?per_page=10&sort=created`)/*Listar os 10 últimos criados*/

      .then(resposta => resposta.json())

      .then(dados => this.setState({ listaRepositorios: dados }))

      .catch(erro => console.log(erro))
  }

  render() {
    return (
      <header className="App-header">
        <section>
          <div>
            <h1>Bem vindo!!! Por favor digite o nome do usuário GitHub para listar os repositórios</h1>
            <form onSubmit={this.buscarRepositorios}>
              <input onChange={this.atualizaEstadoTitulo} placeholder="Nome do usuário" />
              <button type="submit">Listar</button>
            </form>
          </div>
          <div>
            <h2>Lista com repositórios GitHub do {this.state.nomeUsuario}</h2>
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Data de criação</th>
                  <th>Tamanho do repositório</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.listaRepositorios.map((repos) => {
                    return (
                      <tr key={repos.created_at}>
                        <td>{repos.id}</td>
                        <td>{repos.name}</td>
                        <td>{repos.description}</td>
                        <td>{repos.created_at}</td>
                        <td>{repos.size}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </section>
      </header>
    );
  };
};