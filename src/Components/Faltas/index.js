import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './index.css'
export default function Faltas() {


  return (
    <div class="container">
      <h1>Faltas</h1>
      <Row xs={1} md={2} className="row justify-content-center">
        <Col>
          <Button className="mt-3">
            <Link to="/inserirFaltas" className="link"> Inserir</Link>
          </Button>
        </Col>
        </Row>
        <Row>
        <Col>
          <Button variant={"info"}>
            <Link to="/visualizarFaltas"  className="link"> Vizualizar</Link>
          </Button>
        </Col>
        </Row>



    </div>
  )
}