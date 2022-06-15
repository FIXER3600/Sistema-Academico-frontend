import { Form, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import api from '../../../service/api'

import './index.css'
import AlunosLista from './AlunosLista';

export default function InserirNotas() {

  const [curso, setCurso] = useState([])
  const [disciplina, setDisciplina] = useState([])
  const [avaliacao, setAvaliacao] = useState([])
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState([])
  const [avaliacaoSelecionada, setAvaliacaoSelecionada] = useState([])


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
      loadAvaliacao(disciplina[0])
      setDisciplinaSelecionada(disciplina[0])



    }
  }, [disciplina])

  useEffect(() => {

    loadAvaliacao(disciplinaSelecionada)

  }, [disciplinaSelecionada])



  useEffect(() => {
    if (avaliacao.length !== 0) {
      setAvaliacaoSelecionada(avaliacao[0])

    }
  }, [avaliacao])


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

  async function loadAvaliacao(disciplina) {
    await api.get("/avaliacao/disciplina/" + disciplina.codigo)
      .then((response) => {
        setAvaliacao(response.data)

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

  function selectAvaliacao(event) {

    var avaliacao = {
      codigo: event.target.value
    }
    setAvaliacaoSelecionada(avaliacao)
  }



  return (
    <div className="containerNotas">
      <h1>Inserir Notas</h1>

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



          <Col>
            <Form.Label >Avaliação</Form.Label>
            <Form.Control as="select" defaultValue="Selecione o turno" onChange={selectAvaliacao}>
              {
                avaliacao.map((a) => (<option key={a.codigo} value={a.codigo}> {a.tipo} </option>))
              }
            </Form.Control>

          </Col>
        </Row>
      </Form>


      <h3 className="mt-5">Lista de Alunos</h3>


      <AlunosLista avaliacao={avaliacaoSelecionada} />
    </div>
  )
}