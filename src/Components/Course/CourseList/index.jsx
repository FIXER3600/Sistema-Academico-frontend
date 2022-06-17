import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { goToEditCoursePage } from '../../../routes/coordinator';
import api from '../../../service/api';
import { useNavigate } from "react-router-dom"
export const CourseList = () => {
	const [curso, setCurso] = useState([]);
	const navigate = useNavigate()
	async function loadCursos() {
	  await api
	    .get("/cursos")
	    .then((response) => {
	      setCurso(response.data);
	    })
	    .catch((err) => {
	      console.error(err);
	    });
	}
      
	useEffect(() => {
	  loadCursos();
	}, []);

  return (
    <div className='container'>
		<h1>Cursos Cadastrados</h1>
	<Table  striped bordered hover className="mt-1">
	<thead>
	  <tr>
	    <th>Nome do Curso</th>
	    <th>Limite de Alunos</th>
	    <th>Carga horária</th>
	    <th>Opções</th>
	  </tr>
	</thead>
	<tbody> 
	{curso.map((c) => (
              <tr key={c.codigo}>
                <td>{c.nome}</td>
                <td>{c.limite_alunos}</td>
		<td>{c.carga_horaria}</td>
              
		<Button onClick={()=>goToEditCoursePage(c.codigo,navigate)}>Editar</Button>
            <Button variant="danger">Deletar</Button>
              </tr>
            ))}
	     
	  
  
	</tbody>
	
      </Table>
   
    
		</div>
  )
}
