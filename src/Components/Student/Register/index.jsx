import React from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import './style.css'
export const RegisterStudent = () => {
  return (
    <div className='container'>
	<h1>Cadastro de Aluno</h1>
  <div id='ra'>
	<Form.Label htmlFor="ra" >RA</Form.Label>
	<InputGroup size="sm" name="ra" className="mb-3" >
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" maxlength="13" type="number"/>
  </InputGroup>
  </div>
  <div id='nome'>
  <Form.Label htmlFor="basic-url">Nome</Form.Label>
	<InputGroup size="sm" className="mb-3">
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  </div>
  <div id='curso'>
  <Form.Label htmlFor="basic-url">Curso</Form.Label>
	<InputGroup size="sm" className="mb-3">
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" type="number"/>
  </InputGroup>
  </div>
  <Button variant="primary">Cadastrar</Button>
	</div>
  )
}
