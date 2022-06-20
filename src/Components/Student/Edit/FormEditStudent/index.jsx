import React, { useEffect, useState } from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useForm from '../../../../hook/useForm';
import { goToStudentListPage } from '../../../../routes/coordinator';
import api from '../../../../service/api';

export const FormEditStudent = ({aluno,param}) => {
	const [curso, setCurso] = useState([]);
	const { form, onChange, clearFields } = useForm({
		nome: aluno && aluno.nome,
		curso:  aluno.curso.codigo
	      });
	      const navigate=useNavigate()
	      const editStudent = (e) => {
		e.preventDefault();
		api
		  .put(`/alunos/aluno/update/${param.id}`, {
		    nome: form.nome,
		    curso: { codigo: form.curso },
		  })
		  .then(({ data }) => {
		    alert("Aluno Editado!");
		    goToStudentListPage(navigate)
		  })
		  .catch((err) => {
		    console.log(err);
		  });
		clearFields();
	      };
	    
  const cursos = () => {
    api
      .get("/cursos")
      .then((response) => {
        setCurso(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    cursos();
  }, []);
  const coursesList = curso?.map((curso, index) => {
    return (
      <>
        <option key={index} value={curso.codigo}>
          {curso.codigo} - {curso.nome}
        </option>
      </>
    );
  });
  return (
	<form onSubmit={editStudent} method="PUT">
	<div className="container">
	  <h1>Editar Aluno</h1>
	  <div id="nome">
	    <Form.Label htmlFor="basic-url">Nome</Form.Label>
	    <InputGroup size="sm" className="mb-3">
	      <FormControl
		aria-label="Small"
		aria-describedby="inputGroup-sizing-sm"
		name="nome"
		onChange={onChange}
		value={form.nome}
	      />
	    </InputGroup>
	  </div>
	  <div id="curso">
	    <Form.Label htmlFor="basic-url">Curso</Form.Label>
	    <Form.Control
	      as="select"
	      defaultValue={"Selecione o novo curso que o aluno fará"}
	      htmlFor="basic-url"
	      value={form.curso}
	      onChange={onChange}
	      name="curso"
	    >
	      {coursesList}
	    </Form.Control>
	  </div>
	  <Button variant="primary" type="submit">
	    Editar
	  </Button>
	</div>
      </form>
  )
}
