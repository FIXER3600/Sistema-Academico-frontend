import React, { useState } from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import './style.css'
import api from '../../../service/api';
import useForm from '../../../hook/useForm';
import { useEffect } from 'react';
export const RegisterStudent = () => {
  const { form, onChange, clearFields } = useForm({
    nome: "",
   curso: ""
  });
  const [curso, setCurso] = useState([]);
  const cursos=()=>{
    api.get("/cursos")
        .then((response) => {
          setCurso(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
  }
  console.log(curso);
useEffect(() => {
  cursos();
}, []);
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

const coursesList=curso?.map((curso,index)=>{
  return(<>
  <option key={index} value={curso.codigo}>{curso.codigo} - {curso.nome}</option>
  </>)
})

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
  <Form.Control as='select' defaultValue={'Selecione o curso que o aluno fará'} htmlFor="basic-url" value={form.curso} onChange={onChange} name='curso'>
	 {coursesList} 

  </Form.Control>
  </div>
  <Button variant="primary" type='submit'>Cadastrar</Button>
	</div>
  </form>
  )
}
