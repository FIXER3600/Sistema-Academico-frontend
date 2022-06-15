import { useEffect, useState } from "react"
import { Table, Form, Button } from 'react-bootstrap';
import api from '../../../../service/api'

export default function AlunosListaFaltas({ disciplina, dataSelecionada }) {

  var [alunoFalta, setAlunoFalta] = useState([])
  var jsonAlunoFalta

  useEffect(() => {
    loadAlunos(disciplina, dataSelecionada)

  }, [dataSelecionada, disciplina])



  async function loadAlunos(disciplina, dataSelecionada) {

    if (disciplina.codigo !== undefined) {
      await api.get("/faltas/" + disciplina.codigo + "/" + dataSelecionada)
        .then((response) => {

          setAlunoFalta(response.data)

        })
        .catch((err) => {
          console.error(err)
        })


    }
  }



  async function handleSubmit(e) {
    e.preventDefault()
    geraAlunoFalta()

    await api.put('/faltas', jsonAlunoFalta, {
      headers: {
        'content-type': 'application/json'
      }
    })
  }


  function geraAlunoFalta() {

    var aluno = document.getElementsByName('falta[]');

    var alunosFalta = [];

    for (var i = 0; i < aluno.length; i = i + 3) {

      var alunoFalta = {
        ra: aluno[i + 0].value,
        disciplina: disciplina.codigo,
        dataFalta: dataSelecionada,
        qtdePresenca: aluno[i + 2].value
      }

      console.log(alunoFalta)

      alunosFalta.push(alunoFalta)

    }

    jsonAlunoFalta = JSON.stringify(alunosFalta);

  }

  function geraItem(numAulas, faltasAluno, raAluno) {
    var retorno = [];
    for (var i = 0; i <= numAulas; i++) {
      var chave = raAluno + faltasAluno + i
      retorno.push(<option key={chave} value={i}> {i} </option>);
    }

    return retorno;
  }

  return (

    <Form action="/teste" method="POST" onSubmit={handleSubmit} id="form">
      <Table striped bordered hover className="mt-1">
        <thead>
          <tr>
            <th>RA</th>
            <th>Nome</th>
            <th>Qtde. Faltas</th>
          </tr>
        </thead>
        <tbody>

          {

            alunoFalta.map((af, index) => {

              var numAulas = disciplina.numAulas

              var chaveSelect = Math.floor(Math.random() * 101) + af.ra;
              return (

                <tr key={af.ra}>
                  <td><Form.Control as="input" defaultValue={af.ra} name="falta[]" plaintext /></td>
                  <td><Form.Control as="input" defaultValue={af.nome} name="falta[]" plaintext /></td>
                  <td>
                    <Form.Control as="select" defaultValue={af.qtdeFalta} name="falta[]" key={chaveSelect}>

                      {geraItem(numAulas, af.qtdeFalta, af.ra)}
                    </Form.Control>
                  </td>
                </tr>
              )
            })
          }

        </tbody>

      </Table>
          
      <Button id="botaoEnviaFalta" variant="primary" type="submit">
        Enviar
    </Button>

    </Form>

  )

}