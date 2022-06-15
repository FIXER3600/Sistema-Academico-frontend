import { useEffect, useState } from "react"
import { Table } from 'react-bootstrap';
import api from '../../../../service/api'

export default function AlunosLista({ disciplina }) {

  var [alunoMedia, setAlunoMedia] = useState([])
  var [avaliacao, setAvaliacao] = useState([])


  async function loadAvaliacao(disciplina) {
    await api.get("avaliacao/disciplina/" + disciplina.codigo)
      .then((response) => {
        setAvaliacao(response.data)

      })
      .catch((err) => {
        console.error(err)
      })

  }
  async function loadAlunos(disciplina) {

    if (disciplina.codigo !== undefined) {
      await api.get("alunos/media/" + disciplina.codigo)
        .then((response) => {
          setAlunoMedia(response.data)
        })
        .catch((err) => {
          console.error(err)
        })
    }

  }

  useEffect(() => {
    loadAvaliacao(disciplina)
    loadAlunos(disciplina)

  }, [disciplina])



  return (


    <Table striped bordered hover className="mt-1">
      <thead>
        <tr>
          <th>RA</th>
          <th>Nome</th>

          {
            avaliacao.map((av) => (
              <th>{av.tipo}</th>
            ))
          }

          <th>Media Final</th>
          <th>Situação</th>
        </tr>
      </thead>
      <tbody>

        {

          alunoMedia.map((a) => (
            <tr key={a.ra_aluno}>
              <td>{a.ra_aluno}</td>
              <td>{a.nome_aluno}</td>
              {
                avaliacao.map((av, index) => {
                  if (index === 0) {
                    return (<td>{a.nota1}</td>)
                  } else if (index === 1) {
                    return (<td>{a.nota2}</td>)
                  } else if (index === 2) {
                    if (av.tipo === 'E') {
                      return (<td>{a.exame}</td>)
                    } else {
                      return (<td>{a.nota3}</td>)
                    }

                  } else if (index === 3) {

                    if (av.tipo === 'E') {
                      return (<td>{a.exame}</td>)
                    } else {
                      return (<td>{a.nota4}</td>)
                    }

                  }

                  return false;

                })
              }


              <td>{a.media_final}</td>
              <td>{a.situacao}</td>
            </tr>
          ))
        }

      </tbody>

    </Table>



  )

}