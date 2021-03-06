import { Col, Container, Row, Table, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import React, { useState } from "react";

import { findMessagesThunk } from "../../store/modules/messaging/actions";
import Select from "../../components/Select";
import TableRows from "../../components/TableRows";
import useMessages from "../../hooks/useMessages";

import "./styles.css";

const MessagesPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    search: { results, filters },
  } = useSelector(({ messaging }) => messaging);

  const [triggers, channels, messages, timers] = useMessages();

  const [triggerSelected, setTriggerSelected] = useState("");
  const [channelSelected, setChannelSelected] = useState("");
  const [timerSelected, setTimerSelected] = useState("");

  const handleChange = (e, callbackFn) => {
    callbackFn(e.target.value);
  };
  return (
    <Container
      fluid="md"
      style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}
    >
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
            className="mx-1"
          >
            Pesquisar
          </Button>
          <Button variant="dark" onClick={() => history.push("/nova-mensagem")}>
            Nova Mensagem
          </Button>
        </Col>
      </Row>
      <Form>
        <Row className="upperRow">
          <Form.Group as={Col} lg={3} xs={12} controlId={"triggerSelect"}>
            <Form.Label>Gatilho</Form.Label>
            <Select
              data={triggers}
              defaultValue={filters ? filters.trigger : ""}
              objKey={"name"}
              handleChange={(e) => handleChange(e, setTriggerSelected)}
            />
          </Form.Group>
          <Form.Group as={Col} lg={3} xs={12} controlId={"channelSelect"}>
            <Form.Label>Canal</Form.Label>
            <Select
              data={channels}
              defaultValue={filters ? filters.channel : ""}
              objKey={"name"}
              handleChange={(e) => handleChange(e, setChannelSelected)}
            />
          </Form.Group>

          <Form.Group as={Col} lg={3} xs={12} controlId={"timerSelect"}>
            <Form.Label>Timer</Form.Label>
            <Select
              data={timers}
              defaultValue={filters ? filters.timer : ""}
              objKey={"timer"}
              handleChange={(e) => handleChange(e, setTimerSelected)}
            />
          </Form.Group>
        </Row>
      </Form>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Gatilho</th>
            <th>Canal</th>
            <th>Tempo</th>
            <th>A????es</th>
          </tr>
        </thead>
        <tbody>
          <TableRows messages={results || messages} />
        </tbody>
      </Table>
    </Container>
  );
};

export default MessagesPage;
