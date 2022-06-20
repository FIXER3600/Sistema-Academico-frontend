import React, { useEffect, useState } from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import useForm from '../../../../hook/useForm';
import { goToSubjectListPage } from '../../../../routes/coordinator';
import api from '../../../../service/api';
import { useNavigate } from 'react-router-dom';
export const FormEditSubject = ({subject,param}) => {
	const { form, onChange, clearFields } = useForm({
		codigo:subject.codigo,
		nome:subject.nome,
		sigla:subject.sigla,
		turno:subject.turno,
		numAulas:subject.numAulas,
	       curso: subject.curso.codigo
	      });
	   const navigate=useNavigate()
	      const editSubject=(e)=>{
		e.preventDefault()
		api.put(`/disciplinas/curso/update/${param.id}`,{"codigo":form.codigo,
	"nome":form.nome,"sigla":form.sigla,"turno":form.turno,"numAulas":form.numAulas,"curso":{"codigo":form.curso}})
	.then(({data})=>{
		alert("Disciplina Editada!")
	    goToSubjectListPage(navigate)
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
  console.log(curso);
useEffect(() => {
  cursos();
}, []);
const coursesList=curso?.map((curso,index)=>{
  return(<>
  <option key={index} value={curso.codigo}>{curso.codigo} - {curso.nome}</option>
  </>)
})
  return (
	<form onSubmit={editSubject} method='PUT'>
	<div className='container'><h1>Editar Disciplina</h1>
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
	<Button variant="primary" type='submit'>Editar</Button>
	  </div>
	  </form>
  )
}
