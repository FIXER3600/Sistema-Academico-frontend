import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { goToEditEvaluationPage } from '../../../routes/coordinator';
import api from '../../../service/api';
import { useNavigate } from "react-router-dom"
export const EvaluationList = () => {
	const [avaliacao, setAvaliacao] = useState([]);
  const navigate=useNavigate()
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
              
		<Button onClick={()=>goToEditEvaluationPage(a.codigo,navigate)}>Editar</Button>
            <Button variant="danger">Deletar</Button>
              </tr>
            ))}
	  
  
	</tbody>
	
      </Table>
   
    
		</div>
  )
}
