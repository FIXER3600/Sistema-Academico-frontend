import React from 'react'
import { Button, Table } from 'react-bootstrap'

export const CourseList = () => {
  return (
    <div className='container'>
		<h1>Avaliações Cadastradas</h1>
	<Table  striped bordered hover className="mt-1">
	<thead>
	  <tr>
	    <th>Nome do Curso</th>
	    <th>Limite de Alunos</th>
	    <th>Carga horária</th>
	  </tr>
	</thead>
	<tbody> 
	      <tr>
		<td>Lab. de Engenharia</td>
		<td>40</td>
  
		<td>2200</td>
		<Button>Editar</Button>
		<Button variant="danger">Deletar</Button>
	      </tr>
	     
	  
  
	</tbody>
	
      </Table>
   
    
		</div>
  )
}
