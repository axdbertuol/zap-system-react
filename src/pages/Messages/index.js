import { Col, Container, Row, Table, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";

import Select from "../../components/Select";
import TableRows from "../../components/TableRows";

import "./styles.css";
import { findMessagesThunk } from "../../store/modules/messaging/actions";

const MessagesPage = () => {
  const dispatch = useDispatch();
  const { triggers, channels, messages, searchResults } = useSelector(
    ({ messaging }) => messaging
  );
  const timers = useSelector(({ messaging }) =>
    messaging.messages.map((message) => ({ timer: message.timer }))
  );

  const [triggerSelected, setTriggerSelected] = useState("");
  const [channelSelected, setChannelSelected] = useState("");
  const [timerSelected, setTimerSelected] = useState("");

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
          <Button
            variant="outline-dark"
            onClick={() => {
              dispatch(
                findMessagesThunk(
                  triggerSelected,
                  channelSelected,
                  timerSelected
                )
              );
            }}
          >
            Pesquisar
          </Button>
          <Button variant="dark"> Nova Mensagem</Button>
        </Col>
      </Row>
      <Form>
        <Row xs={3} className="upperRow">
          {triggers && triggers.length > 0 && (
            <Form.Group as={Col} controlId={"triggerSelect"}>
              <Form.Label>Gatilho</Form.Label>
              <Select
                data={triggers}
                objKey={"name"}
                setSelected={setTriggerSelected}
              />
            </Form.Group>
          )}
          {channels && channels.length > 0 && (
            <Form.Group as={Col} controlId={"channelSelect"}>
              <Form.Label>Canal</Form.Label>
              <Select
                data={channels}
                objKey={"name"}
                setSelected={setChannelSelected}
              />
            </Form.Group>
          )}
          {timers && timers.length > 0 && (
            <Form.Group as={Col} controlId={"timerSelect"}>
              <Form.Label>Timer</Form.Label>
              <Select
                data={timers}
                objKey={"timer"}
                setSelected={setTimerSelected}
              />
            </Form.Group>
          )}
        </Row>
      </Form>
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
          <TableRows messages={searchResults || messages} />
        </tbody>
      </Table>
    </Container>
  );
};

export default MessagesPage;
