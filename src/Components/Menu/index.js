import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Notas from '../Notas'

import { Route, Routes } from 'react-router-dom';
import InserirNotas from '../Notas/InserirNotas';
import ExibirMedia from '../Notas/ExibirMedia';
import Faltas from '../Faltas';
import './index.css'
import InserirFaltas from '../Faltas/InserirFaltas';
import ExibirFaltas from '../Faltas/ExibirFaltas';
import Logo from '../../assets/logotipo1.png'
import { RegisterStudent } from '../Student/Register';
import { RegisterCourse } from '../Course/Register';
import { RegisterSubject } from '../Subject/Register';
import { Enroll } from '../Enroll/Register';
import { Evaluation } from '../Evaluation/Register';
import { StudentsList } from '../Student/StudentsList';
import { CourseList } from '../Course/CourseList';
import { EnrollList } from '../Enroll/EnrollList';
import { SubjectsList } from '../Subject/SubjectsList';
import { EvaluationList } from '../Evaluation/EvaluationList';
export default function Menu() {

  return (
    <>
      <Navbar bg="light" expand="lg" className="d-flex flex-row justify-content-between">
        <Navbar.Brand href="#home" className="flex-grow-1" ><Nav.Link href="/"> <img  src={Logo}/></Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <NavDropdown title="Aluno" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.2" href="/signupStudent">Cadastrar Aluno</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.1"  href="/visualizarAlunos">Lista de Alunos</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Curso" id="nav-dropdown">
      <NavDropdown.Item eventKey="4.2" href="/signupCourse">Cadastrar Curso</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.1"  href="/visualizarCursos">Lista de Cursos</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Matrícula" id="nav-dropdown">
      <NavDropdown.Item eventKey="4.2" href="/enroll">Fazer Matrícula</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.1"  href="/visualizarMatriculas">Lista de Matrículas</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Disciplina" id="nav-dropdown">
      <NavDropdown.Item eventKey="4.2" href="/signupSubject">Cadastrar Disciplina</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.1"  href="/visualizarDisciplinas">Lista de Disciplinas</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Avaliação" id="nav-dropdown">
      <NavDropdown.Item eventKey="4.2" href="/signupEvaluation">Cadastrar Avaliação</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.1"  href="/evaluationList">Lista de Avaliações</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Notas" id="nav-dropdown">
      <NavDropdown.Item eventKey="4.2" href="/inserirNotas">Inserir</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.1"  href="/visualizarNotas">Visualizar</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Faltas" id="nav-dropdown">
      <NavDropdown.Item eventKey="4.2" href="/inserirFaltas">Inserir</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.1"  href="/visualizarFaltas">Visualizar</NavDropdown.Item>
      </NavDropdown>   
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    

      <Routes>
        <Route path="/notas" element={<Notas/>} />
        <Route path="/inserirNotas" element={<InserirNotas/>} />
        <Route path="/visualizarNotas" element={<ExibirMedia/>} />
    <Route path="/signupStudent" element={<RegisterStudent/>}/>
    <Route path='/signupCourse' element={<RegisterCourse/>}/>
    <Route path="/signupSubject" element={<RegisterSubject/>}/>
    <Route path="/signupEvaluation" element={<Evaluation/>}/>
    <Route path='/enroll' element={<Enroll/>}/>
        <Route path="/faltas" element={<Faltas/>} />
        <Route path="/inserirFaltas" element={<InserirFaltas/>} />
        <Route path="/visualizarFaltas" element={<ExibirFaltas/>} />
<Route path='/visualizarAlunos' element={<StudentsList/>}/>
<Route path='/visualizarCursos' element={<CourseList/>}/>
<Route path='/visualizarMatriculas' element={<EnrollList/>}/>
<Route path='/visualizarDisciplinas' element={<SubjectsList/>}/>
<Route path='/evaluationList' element={<EvaluationList/>}/>
      </Routes>
      

    </>
  )
}