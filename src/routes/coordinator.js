export const goToEditStudentPage=(id,navigate)=>{
	navigate(`/student/edit/${id}`)
}
export const goToEditCoursePage=(id,navigate)=>{
	navigate(`/course/edit/${id}`)
}
export const goToEditSubjectPage=(id,navigate)=>{
	navigate(`/subject/edit/${id}`)
}
export const goToEditEvaluationPage=(id,navigate)=>{
	navigate(`/evaluation/edit/${id}`)
}
export const goToStudentListPage=(navigate)=>{
	navigate('/visualizarAlunos')
}
export const goToCourseListPage=(navigate)=>{
	navigate('/visualizarCursos')
}
export const goToSubjectListPage=(navigate)=>{
	navigate("/visualizarDisciplinas")
}
export const goToEvaluationListPage=(navigate)=>{
	navigate("/evaluationList")
}