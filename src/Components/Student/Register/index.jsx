import React from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import './style.css'
import api from '../../../service/api';
import useForm from '../../../hook/useForm';
export const RegisterStudent = () => {
  const { form, onChange, clearFields } = useForm({
    nome: "",
   curso: ""
  });
const createStudent=(e)=>{
  e.preventDefault();
  console.log(form);
   api.post("/alunos/aluno/create",{
   "nome":form.nome,"curso":{"codigo":form.curso}
   }
   )
  .then(({data})=>{
    alert("Aluno Criado!")

  }).catch((err) => {
    console.log(err);
  });
  clearFields();
}

  return (
    <form onSubmit={createStudent} method="POST">
    <div className='container'>
	<h1>Cadastro de Aluno</h1>

  <div id='nome'>
  <Form.Label htmlFor="basic-url">Nome</Form.Label>
	<InputGroup size="sm" className="mb-3">
    <FormControl aria-label="Small" onChange={onChange} value={form.nome} aria-describedby="inputGroup-sizing-sm" name="nome"/>
  </InputGroup>
  </div>
  <div id='curso'>
  <Form.Label htmlFor="basic-url">Curso</Form.Label>
	<InputGroup size="sm" className="mb-3">
    <FormControl aria-label="Small" value={form.curso} onChange={onChange} aria-describedby="inputGroup-sizing-sm" type="number" name="curso"/>
  </InputGroup>
  </div>
  <Button variant="primary" type='submit'>Cadastrar</Button>
	</div>
  </form>
  )
}
