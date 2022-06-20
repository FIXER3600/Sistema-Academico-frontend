import React from 'react'
import './style.css'
import { useParams } from 'react-router-dom';
import { FormEditEvaluation } from './FormEditEvaluation';
import useRequestData from '../../../hook/useRequestData';
export const EditEvaluationPage = () => {
  const param=useParams()
  const { data } = useRequestData({}, `/avaliacao/${param.id}`)


  return (
    <>
{data.disciplina &&  <FormEditEvaluation avaliacao={data} param={param}/>}
</>
  )
}
