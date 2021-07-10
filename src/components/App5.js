import React from "react";

class App5 extends React.Component{
  constructor(props){
    super(props);
    this.state = {nome: undefined, idade: undefined, txtNome: ''};
  }

  changeTxtName = (e) => {
    this.setState({txtNome: e.target.value})
  }

  changeIdade = (e) => {
    this.setState({idade: e.target.value})
    sessionStorage.setItem('idade', this.state.idade);

  }

  persistName = () => {
    this.setState({nome: this.state.txtNome})
    sessionStorage.setItem('nome', this.state.txtNome);
  }

  componentDidMount = () => {
    const nome = sessionStorage.getItem('nome')
    const idade = sessionStorage.getItem('idade')
    if(nome) this.setState({nome})
    if(idade) this.setState({idade})
  }

  render() {
    const renderForm = () => {
      return (
        <>
          Nome: <input type="text" 
            value={this.state.nome} 
            onChange={this.changeTxtName}>
          </input>

          Idade: <input type="number" 
            value={this.state.idade} 
            onChange={this.changeIdade}>
          </input>

          <button onClick={this.persistName}>Salvar</button>
        </>
      );
    }

    const renderTxt = () => {
      return(
        <>
          <p>
            Hello {this.state.nome}, com {this.state.idade} anos..
          </p>
        </>
      );
    }

    return !this.state.nome ? renderForm() : renderTxt();
    
  }
}

export default App5;
