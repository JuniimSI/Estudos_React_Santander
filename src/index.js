import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from './components/App2';
import App3 from './components/App3';
import App4 from './components/App4';
import App5 from './components/App5';
import Lista from './components/Lista';
import {Lista2, Item} from './components/Lista2';
import Formulario from './components/Formulario';
import Hello from './components/Hello';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App />
    <App2 title="Título 1" text="Texto 1"> Conteúdo 1</App2> 
    <br></br>
    <App4 />
    <App5 />
    <Lista/>
    <Lista2>
      Teste 01
      <Item key={5} id={55} completo={false}>
        Teste1
      </Item>
      <Item key={6} id={66} completo={true}>
        Teste2
      </Item>
    </Lista2>
    <Formulario/>*/}
    <Hello text="olá">
      <h1>Hello World</h1>
    </Hello>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
