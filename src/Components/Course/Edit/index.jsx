import React from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import './style.css'
import api from '../../../service/api'
import useForm from '../../../hook/useForm';

export const EditCoursePage = () => {
  const { form, onChange, cleanFields } = useForm({
    nome: "",
   studentsLimit: 0,
workload:0
  });
  const editCourse=(e)=>{
    e.preventDefault();
    api.post('/cursos/curso',form)
    .then(({ data }) => {
      alert("Curso editado!");
    })
    .catch((err) => {
      console.log(err);
    });
  cleanFields();
  }
	return (
    <form onSubmit={editCourse} method="PUT">
		<div className='container'>
		    <h1>Editar Curso</h1>
        <div id='nome'>
  <Form.Label htmlFor="basic-url">Nome</Form.Label>
	<InputGroup size="sm" className="mb-3">
    <FormControl aria-label="Small" name='nome' value={form.nome} onChange={onChange} aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  </div>
  <div id='total'>
  <Form.Label htmlFor="basic-url">Limite de Alunos</Form.Label>
	<InputGroup size="sm" className="mb-3">
    <FormControl aria-label="Small"  name='studentsLimit' value={form.studentsLimit} onChange={onChange} aria-describedby="inputGroup-sizing-sm" type='number'/>
  </InputGroup>
  </div>
  <div id='carga'>
  <Form.Label htmlFor="basic-url">Carga horária</Form.Label>
	<InputGroup size="sm" className="mb-3">
    <FormControl aria-label="Small"  name='workload' value={form.workload} onChange={onChange} aria-describedby="inputGroup-sizing-sm" type='number'/>
  </InputGroup>
  </div>
  <Button variant="primary">Editar</Button>
    </div>
    </form>
	      )
}
