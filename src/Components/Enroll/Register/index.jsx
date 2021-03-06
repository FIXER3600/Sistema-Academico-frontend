import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import useForm from '../../../hook/useForm'
import api from '../../../service/api'
import './style.css'
export const Enroll = () => {
  const [disciplina,setDisciplina]=useState([])
  const [aluno,setAluno]=useState([])
  const [curso, setCurso] = useState([]);
  const { form, onChange } = useForm({
    raAluno: 0,
    codigoDisciplina:''
  });


  const createEnroll=(e)=>{
    e.preventDefault()
    api.post("/matriculas/matricula/create",form)
   
  .then(({data})=>{
      alert("Matrícula Criada!")
  
    }).catch((err) => {
      console.log(err);
    });
    
  }
  async function loadDisciplina(curso) {
    await api.get("/disciplinas/curso/" + curso.codigo)
      .then((response) => {
        setDisciplina(response.data)
      })
      .catch((err) => {
        console.error(err)
      })

  }
  async function loadAlunos(curso) {
    await api
      .get("/alunos/aluno/curso/"+curso.codigo)
      .then((response) => {
        setAluno(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  useEffect(() => {
    cursos();
  }, []);
  useEffect(() => {
    if (curso.length !== 0) {
      loadDisciplina(curso[0])
     loadAlunos(curso[0])
    }
     
  }, [curso])
 
  const cursos=()=>{
    api.get("/cursos")
        .then((response) => {
          setCurso(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
  }
  function selectCurso(event) {

    var cursoSelecionado = {
      codigo: event.target.value
    }

    loadDisciplina(cursoSelecionado)
    loadAlunos(cursoSelecionado) 

  }
  

  const coursesList=curso?.map((curso,index)=>{
    return(<>
    <option key={index} value={curso.codigo}>{curso.codigo} - {curso.nome}</option>
    </>)
  })
  return (
    <form onSubmit={createEnroll} method='POST'>
    <div className='container'><h1>Matrícula</h1>
    <div id='curso'>
  <Form.Label htmlFor="basic-url">Curso</Form.Label>
  <Form.Control as='select' defaultValue={'Selecione o curso que o aluno fará'} htmlFor="basic-url"  onChange={selectCurso} name='curso'>
	 {coursesList} 

  </Form.Control>
  </div>
    <div id='ra'>
     <Form.Label htmlFor="basic-url">RA do Aluno</Form.Label>
     <Form.Control as="select" name='raAluno' defaultValue="Selecione o aluno" onChange={onChange} value={form.raAluno}>
              {
                aluno?.map((a) => (<option key={a.ra} value={a.ra}> {a.ra} - {a.nome} </option>))
              }
            </Form.Control>
  </div>
  <div id='disciplina'>
  <Form.Label htmlFor="basic-url">Disciplina</Form.Label>
            <Form.Control as="select" name='codigoDisciplina' defaultValue="Selecione a disciplina" onChange={onChange} value={form.codigoDisciplina}>
              {
                disciplina?.map((d) => (<option key={d.codigo} value={d.codigo}> {d.codigo} - {d.nome} - {d.turno} </option>))
              }
            </Form.Control>
  </div>
  <Button variant="primary" type='submit'>Cadastrar</Button>
    </div>
    </form>
  )
}
