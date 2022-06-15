import React from 'react'
import { Button, Table } from 'react-bootstrap'
import './style.css'
export const StudentsList = () => {
  return (
	<div className='container'>
		<h1>Alunos Cadastrados</h1>
	<Table  striped bordered hover className="mt-1">
	<thead>
	  <tr>
	    <th>RA</th>
	    <th>Nome</th>
	    <th>Curso</th>
	  </tr>
	</thead>
	<tbody>
  
	  
  
	   
	      <tr>
		<td>11111111111111</td>
		<td>Guilherme</td>
  
		<td>1</td>
		<Button>Editar</Button>
		<Button variant="danger">Deletar</Button>
	      </tr>
	     
	  
  
	</tbody>
	
      </Table>
   
    
		</div>
     
  )
}
