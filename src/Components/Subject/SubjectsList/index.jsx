import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import api from '../../../service/api';

export const SubjectsList = () => {
	const [disciplina, setDisciplina] = useState([]);

  async function loadDisciplinas() {
    await api
      .get("/disciplinas")
      .then((response) => {
        setDisciplina(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    loadDisciplinas();
  }, []);

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
	    <th>Opções</th>
	  </tr>
	</thead>
	<tbody>
	{disciplina.map((d) => (
              <tr key={d.codigo}>
                <td>{d.curso.nome}</td>
                <td>{d.nome}</td>
		<td>{d.sigla}</td>
                <td>{d.turno}</td>
		<td>{d.numAulas}</td>
		{console.log(d.numAulas)}
		<Button>Editar</Button>
            <Button variant="danger">Deletar</Button>
              </tr>
            ))}
	</tbody>
      </Table>   
		</div>
  )
}
