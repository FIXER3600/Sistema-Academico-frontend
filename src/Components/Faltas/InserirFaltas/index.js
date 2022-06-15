import { Form, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import api from '../../../service/api'

import './index.css'
import AlunosListaFaltas from './AlunosListaFaltas';

export default function InserirFaltas() {

  const [curso, setCurso] = useState([])
  const [disciplina, setDisciplina] = useState([])

  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState([])
  const [dataSelecionada, setDataSelecionada] = useState([])


  useEffect(() => {
    loadCursos()
    setDate()

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

    var indice = event.target.value

    setDisciplinaSelecionada(disciplina[indice])

  }

  function selectData(event) {


    setDataSelecionada(event.target.value)

  }

  function setDate() {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    setDataSelecionada(today)
  }

  return (
    <div className="containerNotas">
      <h1>Inserir Faltas</h1>

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
                disciplina.map((d, index) => (<option key={d.codigo} value={index}> {d.codigo} - {d.nome} - {d.turno} </option>))
              }
            </Form.Control>
          </Col>

          <Col>
            <Form.Label>Data</Form.Label>
            <input type="date" className="form-control" value={dataSelecionada} onChange={selectData} />
          </Col>

        </Row>
      </Form>


      <h3 className="mt-5">Lista de Alunos</h3>

      <AlunosListaFaltas disciplina={disciplinaSelecionada} dataSelecionada={dataSelecionada} />

    </div >
  )
}