import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import api from "../../../service/api";
import "./style.css";
export const StudentsList = () => {
  const [aluno, setAluno] = useState([]);

  async function loadAlunos() {
    await api
      .get("/alunos")
      .then((response) => {
        setAluno(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    loadAlunos();
  }, []);
console.log(aluno);
  return (
    <div className="container">
      <h1>Alunos Cadastrados</h1>
      <Table striped bordered hover className="mt-1">
        <thead>
          <tr>
            <th>RA</th>
            <th>Nome</th>
            <th>Curso</th>
	    <th>Opções</th>
          </tr>
        </thead>
        <tbody>
         
            {aluno.map((a) => (
              <tr key={a.ra}>
                <td>{a.ra}</td>
                <td>{a.nome}</td>
                <td>{a.curso.nome}</td>
		<Button>Editar</Button>
            <Button variant="danger">Deletar</Button>
              </tr>
            ))}
       
          
        </tbody>
      </Table>
    </div>
  );
};
