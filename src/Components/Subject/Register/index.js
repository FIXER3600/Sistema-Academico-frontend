import React, { useEffect, useState } from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import useForm from '../../../hook/useForm';
import api from '../../../service/api';
import './style.css'
export const RegisterSubject = () => {
  const { form, onChange, clearFields } = useForm({
    codigo:"",
    nome: "",
    sigla:"",
    turno: "",
    numAulas:0,
   curso: 0
  });
  const createSubject=(e)=>{
    e.preventDefault()
    api.post(`/disciplinas/curso/create`,{
      "codigo":form.codigo,
      "nome":form.nome,
      "sigla":form.sigla,
      "turno":form.turno,
      "numAulas":form.numAulas,
      "curso":{"codigo":form.curso}
    }).then(({data})=>{
      alert("Disciplina Criada!")
  
    }).catch((err) => {
      console.log(err);
    });
    clearFields();
  }
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
  
useEffect(() => {
  cursos();
}, []);
const coursesList=curso?.map((curso,index)=>{
  return(<>
  <option key={index} value={curso.codigo}>{curso.codigo} - {curso.nome}</option>
  </>)
})

  return (
    <form onSubmit={createSubject} method="POST">
    <div className='container'>
      <h1>Cadastrar Disciplina</h1>
     <div id='codigo'>
    <Form.Label htmlFor="ra" >Código da Disciplina</Form.Label>
	<InputGroup size="sm" name="ra" className="mb-3" >
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name='codigo' value={form.codigo} onChange={onChange}/>
  </InputGroup>
  </div>
      <div id='nome'>
    <Form.Label htmlFor="ra" >Nome</Form.Label>
	<InputGroup size="sm" name="ra" className="mb-3" >
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name='nome' value={form.nome} onChange={onChange}/>
  </InputGroup>
  </div>
  <div id='sigla'>
    <Form.Label htmlFor="basic-url">Sigla</Form.Label>
	<InputGroup size="sm" className="mb-3">
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name='sigla' value={form.sigla} onChange={onChange}/>
  </InputGroup></div>
  <div id='turno'>
  <Form.Label htmlFor="basic-url">Turno</Form.Label>
	<InputGroup size="sm" className="mb-3">
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name='turno' value={form.turno} onChange={onChange}/>
  </InputGroup>
  </div>
  <div id='aulas'>
  <Form.Label htmlFor="basic-url">Número de Aulas</Form.Label>
	<InputGroup size="sm" className="mb-3">
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" type="number" name='numAulas' value={form.numAulas} onChange={onChange}/>
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
