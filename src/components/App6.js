import React, {useState, useEffect} from "react";

export default function App6() {
   const [nome, setNome] = useState(undefined);

    useEffect(
      ()=> {
        if(nome === undefined){
          setNome(sessionStorage.getItem('nome') || '');
        } else {
          sessionStorage.setItem('nome', nome);
        }
        console.log('Efeito: ', nome)
      }, [nome]
    );

   return (
      <>
        Nome: <input type="text" value={nome} 
              onChange={(e) => setNome(e.target.value)}></input>
        <h2>Olá!! {nome}.</h2>
      </>
   );
}

