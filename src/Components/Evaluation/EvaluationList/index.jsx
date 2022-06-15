import React from 'react'
import { Button, Table } from 'react-bootstrap'

export const EvaluationList = () => {
  return (
    <div className='container'>
		<h1>Avaliações Cadastradas</h1>
	<Table  striped bordered hover className="mt-1">
	<thead>
	  <tr>
	    <th>Disciplina</th>
	    <th>Tipo</th>
	    <th>Peso</th>
	  </tr>
	</thead>
	<tbody> 
	      <tr>
		<td>Lab. de Engenharia</td>
		<td>P1</td>
  
		<td>0.5</td>
		<Button>Editar</Button>
		<Button variant="danger">Deletar</Button>
	      </tr>
	     
	  
  
	</tbody>
	
      </Table>
   
    
		</div>
  )
}
