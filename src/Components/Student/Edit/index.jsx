import React from "react";

import { useParams } from "react-router-dom";

import useRequestData from "../../../hook/useRequestData";

import { FormEditStudent } from "./FormEditStudent";
import "./style.css";
export const EditStudentPage = () => {
  const param = useParams();
  const { data } = useRequestData({}, `/alunos/aluno/${param.id}`);

  return <>{data.nome && <FormEditStudent aluno={data} param={param} />}</>;
};
