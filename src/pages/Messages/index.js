import React, { useState, useMemo } from "react";
import {
  Col,
  Container,
  Row,
  Table,
  Button,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

const TableRow = ({ data, keys }) => {
  const memoizedRow = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(data).filter((row) => keys.includes(row[0]))
      ),
    [data, keys]
  );
  return (
    <tr>
      <td>{memoizedRow.trigger}</td>
      <td>{memoizedRow.channel}</td>
      <td>{memoizedRow.timer}</td>
      <td>
        <Button onClick={() => console.log("id", memoizedRow.id)}>
          Ver Mensagem
        </Button>
      </td>
    </tr>
  );
};

const Select = ({ data, objKey }) => (
  <Form.Select>
    <option value=""></option>
    {data &&
      data.map((item, index) => (
        <option key={index + "_" + item.id} value={item[objKey]}>
          {item[objKey]}
        </option>
      ))}
  </Form.Select>
);

const MessagesPage = () => {
  const dispatch = useDispatch();
  const triggers = useSelector(({ messaging }) => messaging.triggers);
  const channels = useSelector(({ messaging }) => messaging.channels);
  const timers = useSelector(({ messaging }) =>
    messaging.messages.map((message) => ({ timer: message.timer }))
  );
  const messages = useSelector(({ messaging }) => messaging.messages);

  const [search, setSearch] = useState("");

  return (
    <Container fluid="md">
      <Row className="upperRow">
        <Col sm={8} xs={12}>
          <h2>Mensagens</h2>
        </Col>
        <Col
          xs={12}
          sm={4}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button variant="dark"> Nova Mensagem</Button>
        </Col>
      </Row>
      <Form>
        <Row xs={3} className="upperRow">
          {triggers && triggers.length > 0 && (
            <Form.Group as={Col} controlId={"triggerSelect"}>
              <Form.Label>Gatilho</Form.Label>
              <Select data={triggers} objKey={"name"} />
            </Form.Group>
          )}
          {channels && channels.length > 0 && (
            <Form.Group as={Col} controlId={"channelSelect"}>
              <Form.Label>Canal</Form.Label>
              <Select data={channels} objKey={"name"} />
            </Form.Group>
          )}
          {timers && timers.length > 0 && (
            <Form.Group as={Col} controlId={"timerSelect"}>
              <Form.Label>Timer</Form.Label>
              <Select data={timers} objKey={"timer"} />
            </Form.Group>
          )}
          <Col xs={12} style={{ padding: "20px 12px" }}>
            <Button variant="outline-dark"> Pesquisar </Button>
          </Col>
        </Row>
      </Form>
      {/* <Row> */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Gatilho</th>
            <th>Canal</th>
            <th>Tempo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {messages &&
            messages.map((message) => (
              <TableRow
                data={message}
                keys={["trigger", "channel", "timer", "id"]}
              />
            ))}
        </tbody>
      </Table>
      {/* </Row> */}
    </Container>
  );
};

export default MessagesPage;
