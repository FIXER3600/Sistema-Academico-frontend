import React, { useEffect, useState } from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import useForm from '../../../hook/useForm';
import api from '../../../service/api';
import './style.css'
export const Evaluation = () => {
  const [disciplina,setDisciplina]=useState([])
  const { form, onChange, clearFields } = useForm({
    disciplina: '',
    tipo: "",
    peso:0.0,
  });
 
const createEvaluation=(e)=>{
e.preventDefault()
console.log(form);
api.post('/avaliacao/create',{"tipo":form.tipo,
"peso":form.peso,"disciplina":{"codigo":form.disciplina}})
.then(({data})=>{
  alert("Avaliação Criada!")
}).catch((err) => {
  console.log(err);
});
clearFields();
}
async function loadDisciplina() {
  await api.get("/disciplinas")
    .then((response) => {
      setDisciplina(response.data)
    })
    .catch((err) => {
      console.error(err)
    })
}
useEffect(() => {
  loadDisciplina()
 
}, [])
  return (
    <form onSubmit={createEvaluation} method='POST'>
    <div className='container'>
      <h1>Criar Avaliação</h1>
      <div id='codigo'>
  <Form.Label htmlFor="basic-url">Disciplina</Form.Label>
  <Form.Control as="select" name='disciplina' defaultValue="Selecione a disciplina" onChange={onChange}>
              {
                disciplina?.map((d) => (<option key={d.codigo} value={d.codigo}> {d.codigo} - {d.nome} - {d.turno} </option>))
              }
            </Form.Control>
  </div>
  <div id='tipo'>
     <Form.Label htmlFor="basic-url">Tipo da Avaliação</Form.Label>
	<InputGroup size="sm" className="mb-3">
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name='tipo' value={form.tipo} onChange={onChange}/>
  </InputGroup>
  </div>
  <div id='peso'>
  <Form.Label htmlFor="basic-url">Peso</Form.Label>
	<InputGroup size="sm" className="mb-3">
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" type='number' name='peso' value={form.peso} onChange={onChange}/>
  </InputGroup>
  </div>
  <Button variant="primary" type='submit'>Cadastrar</Button>
    </div>
    </form>
  )
}
