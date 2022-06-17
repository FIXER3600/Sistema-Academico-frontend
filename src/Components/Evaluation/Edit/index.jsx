import React from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import './style.css'
export const EditEvaluationPage = () => {
  return (
	<div className='container'>
	<h1>Editar Avaliação</h1>
	<div id='codigo'>
    <Form.Label htmlFor="basic-url">Código da Disciplina</Form.Label>
	  <InputGroup size="sm" className="mb-3">
      <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" type='number'/>
    </InputGroup>
    </div>
    <div id='tipo'>
       <Form.Label htmlFor="basic-url">Tipo da Avaliação</Form.Label>
	  <InputGroup size="sm" className="mb-3">
      <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
    </InputGroup>
    </div>
    <div id='peso'>
    <Form.Label htmlFor="basic-url">Peso</Form.Label>
	  <InputGroup size="sm" className="mb-3">
      <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" type='number'/>
    </InputGroup>
    </div>
    <Button variant="primary">Editar</Button>
      </div>
  )
}
