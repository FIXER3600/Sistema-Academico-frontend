import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './index.css'

export default function Notas() {


  return (
    <div className="container">
      <h1>Notas</h1>
      <Row xs={1} md={2} className="row justify-content-center">
        <Col>
          <Button className="mt-3" id='notas'>
            <Link to="/inserirNotas" className="link"> Inserir</Link>
          </Button>
        </Col>
        </Row>
        <Row>
        <Col>
          <Button variant={"info"}>
            <Link to="/visualizarNotas" variant={"info"} className="link"> Vizualizar</Link>
          </Button>
        </Col>
        </Row>



    </div>
  )
}