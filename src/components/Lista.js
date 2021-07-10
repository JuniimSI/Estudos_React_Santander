import React from 'react';

class Lista extends React.Component{

  constructor(props){
    super(props);

    this.state = {items: ["item1", "item2", "item3", "item4"]}
  }

  render(){
    return (
      <ul>
        {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    )
   }
}

export default Lista;