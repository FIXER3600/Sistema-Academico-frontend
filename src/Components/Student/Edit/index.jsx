import React from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import useForm from '../../../hook/useForm';
import api from '../../../service/api';
import './style.css'
export const EditStudentPage = () => {
	const { form, onChange, clearFields } = useForm({
		nome: "",
	   curso: ""
	  });
	  const param=useParams()
	  
	const editStudent=(e)=>{
		e.preventDefault();
		console.log(param);
			api.put(`/alunos/aluno/update/${param.id}`,{
				"nome":form.nome,"curso":{"codigo":form.curso}
				}
				)
			   .then(({data})=>{
				 alert("Aluno Editado!")
			 
			   }).catch((err) => {
				 console.log(err);
			   });
			   clearFields();
			 };
	return (
		<form onSubmit={editStudent} method="PUT">
		<div className='container'>
		  <h1>Editar Aluno</h1>
	      <div id='nome'>
	      <Form.Label htmlFor="basic-url">Nome</Form.Label>
		    <InputGroup size="sm" className="mb-3" >
		<FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name='nome' onChange={onChange} value={form.nome}/>
	      </InputGroup>
	      </div>
	      <div id='curso'>
	      <Form.Label htmlFor="basic-url">Curso</Form.Label>
		    <InputGroup size="sm" className="mb-3">
		<FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" type="number" onChange={onChange} name="curso" value={form.curso}/>
	      </InputGroup>
	      </div>
	      <Button variant="primary" type="submit">Editar</Button>
		    </div>
			</form>
	      )
}

