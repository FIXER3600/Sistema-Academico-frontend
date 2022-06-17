import React from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import './style.css'
export const EditSubjectPage = () => {
  return (
	<div className='container'><h1>Editar Disciplina</h1>
	<div id='nome'>
	  <Form.Label htmlFor="ra" >Nome</Form.Label>
	      <InputGroup size="sm" name="ra" className="mb-3" >
	  <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
	</InputGroup>
	</div>
	<div id='sigla'>
	  <Form.Label htmlFor="basic-url">Sigla</Form.Label>
	      <InputGroup size="sm" className="mb-3">
	  <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
	</InputGroup></div>
	<div id='turno'>
	<Form.Label htmlFor="basic-url">Turno</Form.Label>
	      <InputGroup size="sm" className="mb-3">
	  <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
	</InputGroup>
	</div>
	<div id='aulas'>
	<Form.Label htmlFor="basic-url">Número de Aulas</Form.Label>
	      <InputGroup size="sm" className="mb-3">
	  <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" type="number"/>
	</InputGroup>
	</div>
	<div id='curso'>
	<Form.Label htmlFor="basic-url">Código curso</Form.Label>
	      <InputGroup size="sm" className="mb-3">
	  <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" type="number"/>
	</InputGroup>
	</div>
	<Button variant="primary">Editar</Button>
	  </div>
	)
}
