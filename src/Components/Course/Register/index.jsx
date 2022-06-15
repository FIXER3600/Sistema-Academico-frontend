import React from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import './style.css'
export const RegisterCourse = () => {
  return (
    <div className='container'>
      <h1>Cadastrar Curso</h1>
      <div id='nome'>
  <Form.Label htmlFor="basic-url">Nome</Form.Label>
	<InputGroup size="sm" className="mb-3">
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  </div>
  <div id='total'>
  <Form.Label htmlFor="basic-url">Limite de Alunos</Form.Label>
	<InputGroup size="sm" className="mb-3">
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" type='number'/>
  </InputGroup>
  </div>
  <div id='carga'>
  <Form.Label htmlFor="basic-url">Carga horária</Form.Label>
	<InputGroup size="sm" className="mb-3">
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  </div>
  <Button variant="primary">Cadastrar</Button>
    </div>
  )
}
