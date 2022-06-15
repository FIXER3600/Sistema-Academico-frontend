import React from 'react'
import { Button, Table } from 'react-bootstrap'

export const SubjectsList = () => {
  return (
    <div className='container'>
		<h1>Disciplinas Cadastradas</h1>
	<Table  striped bordered hover className="mt-1">
	<thead>
	  <tr>
	    <th>Curso</th>
	    <th>Nome</th>
	    <th>Sigla</th>
      <th>Turno</th>
	    <th>Total de Aulas</th>
	  </tr>
	</thead>
	<tbody>
	      <tr>
		<td>ADS</td>
		<td>Laboratório de Engenharia de Software</td>
    <td>LES</td>
		<td>Tarde</td>
    <td>4</td>
		<Button>Editar</Button>
		<Button variant="danger">Deletar</Button>
	      </tr>
	</tbody>
      </Table>   
		</div>
  )
}
