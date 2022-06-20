import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import api from "../../../service/api";
export const EnrollList = () => {
  const [matricula, setMatricula] = useState([]);

  async function loadMatriculas() {
    await api
      .get("/matriculas")
      .then((response) => {
        setMatricula(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  const deleteEnroll = (code) => {
    const choose = window.confirm("Deseja mesmo deletar essa matrícula?");
    if (choose) {
      api
        .delete(`/matriculas/matricula/delete/${code}`)
        .then((res) => {
          alert("Matrícula deletada!");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    loadMatriculas();
  }, [matricula]);
  return (
    <div className="container">
      <h1>Matrículas Realizadas</h1>
      <Table striped bordered hover className="mt-1">
        <thead>
          <tr>
            <th>RA do Aluno</th>
            <th>Aluno</th>
            <th>Código da Disciplina</th>
            <th>Disciplina</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {matricula.map((m) => (
            <tr key={m.id}>
              <td>{m.raAluno}</td>
	      <td>{m.nomeAluno}</td>
              <td>{m.codigoDisciplina}</td>
              <td>{m.nomeDisciplina}</td>
              <Button variant="danger" onClick={() => deleteEnroll(m.id)}>
                Deletar
              </Button>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
