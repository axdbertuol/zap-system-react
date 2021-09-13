import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const MessagesPage = () => {
  return (
    <Container fluid="md">
      <Row>
        <Col sm={8}>Mensagens</Col>
        <Col sm={4}>Pesquisar Nova Mensagem</Col>
      </Row>
      <Row>
        <Col sm>Gatilho</Col>
        <Col sm>Canal</Col>
        <Col sm>Timer</Col>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Gatilho</th>
              <th>Canal</th>
              <th>Timer</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default MessagesPage;
