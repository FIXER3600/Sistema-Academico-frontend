import React from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import './style.css'
export const Enroll = () => {
  return (
    <div className='container'><h1>Matrícula</h1>
    <div id='ra'>
     <Form.Label htmlFor="basic-url">RA do Aluno</Form.Label>
	<InputGroup size="sm" className="mb-3">
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"type='number' />
  </InputGroup>
  </div>
  <div id='disciplina'>
  <Form.Label htmlFor="basic-url">Código da Disciplina</Form.Label>
	<InputGroup size="sm" className="mb-3">
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" type='number'/>
  </InputGroup>
  </div>
  <Button variant="primary">Cadastrar</Button>
    </div>
  )
}
