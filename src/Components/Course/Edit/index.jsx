import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { FormEditCourse } from "./FormEditCourse";
import useRequestData from "../../../hook/useRequestData";
export const EditCoursePage = () => {
  

  const param = useParams();

  const { data } = useRequestData({}, `/cursos/curso/${param.id}`)
  return (<>
  {data.codigo && <FormEditCourse curso={data} param={param}/>}
  </>
  );
};
