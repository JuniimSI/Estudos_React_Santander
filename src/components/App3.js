import React from "react";

class App3 extends React.Component{
  constructor(props){
    super(props);
    this.state = {nome: '', idade: 0};
  }


  changeName = (e) => {
    this.setState({nome: e.target.value})
  }

  changeIdade = (e) => {
    this.setState({idade: e.target.value})
  }

  render() {
    return (
      <>
        Nome: <input type="text" 
                     value={this.state.nome} 
                     onChange={this.changeName}>
              </input>

        Idade: <input type="number" 
               value={this.state.idade} 
               onChange={this.changeIdade}>
        </input>

        <p>
          Hello {this.state.nome}, com {this.state.idade} anos..
        </p>
      </>
    );
  }
}

export default App3;
