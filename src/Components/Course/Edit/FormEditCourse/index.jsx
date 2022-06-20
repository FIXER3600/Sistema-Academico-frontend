import React from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import useForm from '../../../../hook/useForm';
import api from '../../../../service/api';

export const FormEditCourse = ({curso,param}) => {

	const { form, onChange} = useForm({
		nome: curso && curso.nome,
		limite_alunos: curso && curso.limite_alunos,
		carga_horaria: curso && curso.carga_horaria
	      });
	const editCourse = (e) => {
		api
		  .put(`/cursos/curso/update/${param.id}`, {
		    "nome":form.nome,
		    "limite_alunos":form.limite_alunos,
		    "carga_horaria":form.carga_horaria
		  })
	    
		  .then(({ data }) => {
		    alert("Curso editado!");
		  })
		  .catch((err) => {
		
		    console.log(err);
		  });
	      };
  return (
	<form onSubmit={editCourse} method="PUT">
	<div className="container">
	  <h1>Editar Curso</h1>
	  <div id="nome">
	    <Form.Label htmlFor="basic-url">Nome</Form.Label>
	    <InputGroup size="sm" className="mb-3">
	      <FormControl
		aria-label="Small"
		name="nome"
		value={form.nome}
		onChange={onChange}
		aria-describedby="inputGroup-sizing-sm"
	      />
	    </InputGroup>
	  </div>
	  <div id="total">
	    <Form.Label htmlFor="basic-url">Limite de Alunos</Form.Label>
	    <InputGroup size="sm" className="mb-3">
	      <FormControl
		aria-label="Small"
		name="limite_alunos"
		value={form.limite_alunos}
		onChange={onChange}
		aria-describedby="inputGroup-sizing-sm"
		type="number"
	      />
	    </InputGroup>
	  </div>
	  <div id="carga">
	    <Form.Label htmlFor="basic-url">Carga horária</Form.Label>
	    <InputGroup size="sm" className="mb-3">
	      <FormControl
		aria-label="Small"
		name="carga_horaria"
		value={form.carga_horaria}
		onChange={onChange}
		aria-describedby="inputGroup-sizing-sm"
		type="number"
	      />
	    </InputGroup>
	  </div>
	  <Button variant="primary" type="submit">
	    Editar
	  </Button>
	</div>
      </form>
  )
}
