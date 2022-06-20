import React, { useEffect, useState } from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import useForm from '../../../../hook/useForm'
import { goToEvaluationListPage } from '../../../../routes/coordinator'
import api from '../../../../service/api'
import { useNavigate } from 'react-router-dom';
export const FormEditEvaluation = ({avaliacao,param}) => {
	const [disciplina,setDisciplina]=useState([])
	const { form, onChange, clearFields } = useForm({
		disciplina:avaliacao.disciplina.codigo,
		tipo: avaliacao && avaliacao.tipo,
		peso:avaliacao && avaliacao.peso
	      });

const navigate=useNavigate()
	      const editEvaluation=(e)=>{
e.preventDefault()

api.put(`/avaliacao/update/${param.id}`,{"tipo":form.tipo,
"peso":form.peso,"disciplina":{"codigo":form.disciplina}})
.then(({data})=>{
  alert("Avaliação Editada!")
  goToEvaluationListPage(navigate)
}).catch((err) => {
  console.log(err);
});
clearFields();
}
const disciplinas =()=> {
   api.get("/disciplinas")
    .then((response) => {
      setDisciplina(response.data)
    })
    .catch((err) => {
      console.error(err)
    })
}
useEffect(() => {
  disciplinas()
 
}, [])
  return (
	<form onSubmit={editEvaluation} method='PUT'>
	<div className='container'>
	<h1>Editar Avaliação</h1>
  <div id='codigo'>
  <Form.Label htmlFor="basic-url">Disciplina</Form.Label>
  <Form.Control as="select" name='disciplina' onChange={onChange} value={form.disciplina}>
              {
                disciplina?.map((d,index) => (<option key={index} value={d.codigo}> {d.codigo} - {d.nome} - {d.turno} </option>))
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
    <Button variant="primary" type='submit'>Editar</Button>
      </div>
      </form>
  )
}
