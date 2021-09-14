import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import React, { useState } from "react";

import { saveNewMessage } from "../../store/modules/messaging/actions";

import "./styles.css";
import Select from "../../components/Select";

const NewMessagePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { triggers, channels } = useSelector(({ messaging }) => messaging);
  const timers = useSelector(({ messaging }) =>
    messaging.messages.map((message) => ({ timer: message.timer }))
  );

  const [triggerSelected, setTriggerSelected] = useState("");
  const [channelSelected, setChannelSelected] = useState("");
  const [timerSelected, setTimerSelected] = useState("");
  const [newMessage, setNewMessage] = useState({});
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
          <Button variant="outline-dark" onClick={() => history.goBack()}>
            Voltar
          </Button>
          <Button
            variant="dark"
            onClick={() => {
              if (newMessage && triggerSelected && channelSelected) {
                const id = Math.random().toString;
                dispatch(
                  saveNewMessage({
                    id,
                    channel: channelSelected,
                    trigger: triggerSelected,
                    timer: timerSelected,
                    message: newMessage,
                  })
                );
              } else {
                alert("Preencha todos os campos!");
              }
            }}
          >
            Cadastrar
          </Button>
        </Col>
      </Row>
      <Form style={{ padding: "10px", border: "1px solid #CCC" }}>
        <Row xs={3} style={{}}>
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
          <Col xs={12}>
            <Form.Group className="mb-3" controlId="ControlTextarea">
              <Form.Label>Mensagem:</Form.Label>
              <Form.Control
                as="textarea"
                onChange={(e) => setNewMessage(e.target.value)}
                rows={3}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default NewMessagePage;
