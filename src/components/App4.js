import React from "react";

class App4 extends React.Component{
  constructor(props){
    super(props);
    this.state = {nome: undefined, idade: undefined, txtNome: ''};
  }

  changeTxtName = (e) => {
    this.setState({txtNome: e.target.value})
  }

  changeIdade = (e) => {
    this.setState({idade: e.target.value})
  }

  persistName = () => {
    this.setState({nome: this.state.txtNome})
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

export default App4;
