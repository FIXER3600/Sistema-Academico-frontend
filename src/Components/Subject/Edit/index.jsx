import React from 'react'

import { useParams } from 'react-router-dom';
import useRequestData from '../../../hook/useRequestData';

import { FormEditSubject } from './FormEditSubject';
import './style.css'
export const EditSubjectPage = () => {
	const param=useParams()
	const { data } = useRequestData({}, `/disciplinas/disciplina/${param.id}`);
  return (
	<>
	{data.codigo && <FormEditSubject subject={data}param={param}/>}
	</>
	)
}
