import React from 'react';
import './App.css';

function DataFormatada(props) {
  return <h2>Horário Atual: {props.data.toLocaleTimeString()}</h2>
}

class Relogio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Date()
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      data: new Date()
    });
  }

  Pausar() {
    clearInterval(this.timerId);
    console.log(`Relógio ${this.timerId} pausado`);
  }

  Continuar() {
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000);
    console.log(`Relógio retomado! Agora eu sou o relógio ${this.timerId}`);
  }

  render() {
    return (
      <div>
        <h1>Relogio</h1>
        <DataFormatada data={this.state.data} />
        <div className="botoes">
          <button className="btn_pausar" onClick={() => this.Pausar()}>Pausar</button>
          <button className="btn_continuar" onClick={() => this.Continuar()}>Continuar</button>
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Relogio />
        <Relogio />
      </header>
    </div>
  );
}

export default App;
