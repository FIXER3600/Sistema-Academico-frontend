import React from 'react'
import { Button, Table } from 'react-bootstrap'

export const EnrollList = () => {
  return (
    <div className='container'>
		<h1>Avaliações Cadastradas</h1>
	<Table  striped bordered hover className="mt-1">
	<thead>
	  <tr>
	    <th>RA do Aluno</th>
	    <th>Aluno</th>
	    <th>Código da Disciplina</th>
      <th>Disciplina</th>
	  </tr>
	</thead>
	<tbody> 
	      <tr>
		<td>1111111111111</td>
		<td>Guilherme de Oliveira Barros</td>
  
		<td>1001</td>
    <td>Lab de Engenharia</td>
		<Button>Editar</Button>
		<Button variant="danger">Deletar</Button>
	      </tr>
	     
	  
  
	</tbody>
	
      </Table>
   
    
		</div>
  )
}
