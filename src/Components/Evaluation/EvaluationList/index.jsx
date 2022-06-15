import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import api from '../../../service/api';

export const EvaluationList = () => {
	const [avaliacao, setAvaliacao] = useState([]);

  async function loadAvaliacoes() {
    await api
      .get("/avaliacao")
      .then((response) => {
        setAvaliacao(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    loadAvaliacoes();
  }, []);
  return (
    <div className='container'>
		<h1>Avaliações Cadastradas</h1>
	<Table  striped bordered hover className="mt-1">
	<thead>
	  <tr>
	    <th>Disciplina</th>
	    <th>Tipo</th>
	    <th>Peso</th>
	    <th>Opções</th>
	  </tr>
	</thead>
	<tbody> 
	{avaliacao.map((a) => (
              <tr key={a.codigo}>
                <td>{a.disciplina.nome}</td>
                <td>{a.tipo}</td>
		<td>{a.peso}</td>
              
		<Button>Editar</Button>
            <Button variant="danger">Deletar</Button>
              </tr>
            ))}
	  
  
	</tbody>
	
      </Table>
   
    
		</div>
  )
}
