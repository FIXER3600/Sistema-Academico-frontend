import { Form, Row, Col, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import api from '../../../service/api'

import './index.css'
import AlunosListaFaltas from './AlunosListaFaltas';

export default function ExibirFaltas() {

  const [curso, setCurso] = useState([])
  const [disciplina, setDisciplina] = useState([])
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState([])



  useEffect(() => {
    loadCursos()
  }, [])


  useEffect(() => {
    if (curso.length !== 0) {
      loadDisciplina(curso[0])
    }
  }, [curso])

  useEffect(() => {
    if (disciplina.length !== 0) {
      setDisciplinaSelecionada(disciplina[0])



    }
  }, [disciplina])





  async function loadCursos() {
    await api.get("/cursos")
      .then((response) => {
        setCurso(response.data)


      })
      .catch((err) => {
        console.error(err)
      })

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



  function selectCurso(event) {

    var cursoSelecionado = {
      codigo: event.target.value
    }

    loadDisciplina(cursoSelecionado)

  }

  function selectDisciplina(event) {

    var disciplina = {
      codigo: event.target.value
    }
    setDisciplinaSelecionada(disciplina)
  }


  async function emiteRelatorio(event) {
    var url = "http://localhost:8080/faltas/" + disciplinaSelecionada.codigo + "/relatorio"

    const pdfWindow = window.open();
    pdfWindow.location.href = url;

  }

  return (
    <div className="containerNotas">

          <h1>Visualizar  Faltas</h1>
      <Form>
        <Row className="mt-4">
          <Col>
            <Form.Label>Curso</Form.Label>
            <Form.Control as="select" defaultValue="Selecione a disciplina" onChange={selectCurso} >
              {
                curso.map((c) => (<option key={c.codigo} value={c.codigo}> {c.nome} </option>))
              }
            </Form.Control>
          </Col>

          <Col xs={8}>
            <Form.Label>Disciplina</Form.Label>
            <Form.Control as="select" defaultValue="Selecione a disciplina" onChange={selectDisciplina}>
              {
                disciplina.map((d) => (<option key={d.codigo} value={d.codigo}> {d.codigo} - {d.nome} - {d.turno} </option>))
              }
            </Form.Control>
          </Col>
        </Row>
      </Form>


      <h3 className="mt-5">Lista de Alunos</h3>

      <AlunosListaFaltas disciplina={disciplinaSelecionada} />
      <Button className="botao-relatorio" variant='info' onClick={emiteRelatorio}>
            Relatório
          </Button>
    </div>
  )
}