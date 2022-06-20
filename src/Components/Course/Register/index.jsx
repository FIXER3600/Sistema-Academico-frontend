import React from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import "./style.css";
import api from "../../../service/api";
import useForm from "../../../hook/useForm";

export const RegisterCourse = () => {
  const { form, onChange, clearFields } = useForm({
    nome: "",
    limite_alunos: 0,
    carga_horaria: 0,
  });
  const createCourse = (e) => {
    e.preventDefault();
    api
      .post("/cursos/curso/create", form)
      .then(({ data }) => {
        alert("Curso criado!");
      })
      .catch((err) => {
        console.log(err);
      });
    clearFields();
  };
  return (
    <form onSubmit={createCourse} method="POST">
      <div className="container">
        <h1>Cadastrar Curso</h1>
        <div id="nome">
          <Form.Label htmlFor="basic-url">Nome</Form.Label>
          <InputGroup size="sm" className="mb-3">
            <FormControl
              aria-label="Small"
              name="nome"
              value={form.nome}
              onChange={onChange}
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </div>
        <div id="total">
          <Form.Label htmlFor="basic-url">Limite de Alunos</Form.Label>
          <InputGroup size="sm" className="mb-3">
            <FormControl
              aria-label="Small"
              name="limite_alunos"
              value={form.limite_alunos}
              onChange={onChange}
              aria-describedby="inputGroup-sizing-sm"
              type="number"
            />
          </InputGroup>
        </div>
        <div id="carga">
          <Form.Label htmlFor="basic-url">Carga horária</Form.Label>
          <InputGroup size="sm" className="mb-3">
            <FormControl
              aria-label="Small"
              name="carga_horaria"
              value={form.carga_horaria}
              onChange={onChange}
              aria-describedby="inputGroup-sizing-sm"
              type="number"
            />
          </InputGroup>
        </div>
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </div>
    </form>
  );
};
