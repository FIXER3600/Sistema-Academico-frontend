import { useEffect, useState } from "react"
import { Table } from 'react-bootstrap';
import api from '../../../../service/api'

export default function AlunosListaFaltas({ disciplina }) {

  var [alunoFalta, setAlunoFalta] = useState([])
  var [dataAula, setDataAula] = useState([])

  async function loadAlunoFalta(disciplina) {
    await api.get("/faltas/" + disciplina.codigo)
      .then((response) => {
        setAlunoFalta(response.data)

      })
      .catch((err) => {
        console.error(err)
      })

  }


  async function loadDataAula(disciplina) {
    await api.get("/faltas/datas-aula/" + disciplina.codigo)
      .then((response) => {
        setDataAula(response.data)

      })
      .catch((err) => {
        console.error(err)
      })

  }
  useEffect(() => {

    loadAlunoFalta(disciplina)
    loadDataAula(disciplina)

  }, [disciplina])


  function formataData(data) {
    var dataIso = Date.parse(data)
    var dataNova = new Date(dataIso)
    let dataFormatada = ((dataNova.getDate() + 1)) + "/" + ((dataNova.getMonth() + 1));

    return dataFormatada;
  }

  return (


    <Table striped bordered hover className="mt-1">
      <thead>
        <tr>
          <th>RA</th>
          <th>Nome</th>

          {
            dataAula.map((av) => (
              <th key={av}>{formataData(av)}</th>
            ))
          }
          <th>Total Faltas</th>

        </tr>
      </thead>
      <tbody>

        {

          alunoFalta.map((a, index) => (
            <tr key={a.ra}>
              <td>{a.ra}</td>
              <td>{a.nomeAluno}</td>
              {
                dataAula.map((data, index) => {
                  if (index === 0) {
                    return (<td key={data + index + a.ra}>{a.semana1}</td>)
                  }
                  if (index === 1) {
                    return (<td key={data + index + a.ra}>{a.semana2}</td>)
                  }
                  if (index === 2) {
                    return (<td key={data + index + a.ra}>{a.semana3}</td>)
                  }
                  if (index === 3) {
                    return (<td key={data + index + a.ra}>{a.semana4}</td>)
                  }
                  if (index === 4) {
                    return (<td key={data + index + a.ra}>{a.semana5}</td>)
                  }
                  if (index === 5) {
                    return (<td key={data + index + a.ra}>{a.semana6}</td>)
                  }
                  if (index === 6) {
                    return (<td key={data + index + a.ra}>{a.semana7}</td>)
                  }
                  if (index === 7) {
                    return (<td key={data + index + a.ra}>{a.semana8}</td>)
                  }
                  if (index === 8) {
                    return (<td key={data + index + a.ra}>{a.semana9}</td>)
                  }

                  if (index === 9) {
                    return (<td key={data + index + a.ra}>{a.semana10}</td>)
                  }

                  if (index === 10) {
                    return (<td key={data + index + a.ra}>{a.semana11}</td>)
                  }

                  if (index === 11) {
                    return (<td key={data + index + a.ra}>{a.semana12}</td>)
                  }

                  if (index === 12) {
                    return (<td key={data + index + a.ra}>{a.semana13}</td>)
                  }
                  if (index === 13) {
                    return (<td key={data + index + a.ra}>{a.semana14}</td>)
                  }
                  if (index === 14) {
                    return (<td key={data + index + a.ra}>{a.semana15}</td>)
                  }
                  if (index === 15) {
                    return (<td key={data + index + a.ra}>{a.semana16}</td>)
                  }
                  if (index === 16) {
                    return (<td key={data + index + a.ra}>{a.semana17}</td>)
                  }
                  if (index === 17) {
                    return (<td key={data + index + a.ra}>{a.semana18}</td>)
                  }
                  if (index === 18) {
                    return (<td key={data + index + a.ra}>{a.semana19}</td>)
                  }
                  if (index === 19) {
                    return (<td key={data + index + a.ra}>{a.semana20}</td>)
                  }

                  return false;
                })
              }
              <td >{a.totalFaltas}</td>

            </tr>
          ))
        }
      </tbody>
    </Table>
  )

}