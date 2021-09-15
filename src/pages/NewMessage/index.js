import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import React, { useState } from "react";

import "react-toastify/dist/ReactToastify.min.css";

import { saveNewMessage } from "../../store/modules/messaging/actions";
import Select from "../../components/Select";

import "./styles.css";
import useMessages from "../../hooks/useMessages";

const NewMessagePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [triggers, channels, timers] = useMessages();

  const [triggerSelected, setTriggerSelected] = useState("");
  const [channelSelected, setChannelSelected] = useState("");
  const [timerSelected, setTimerSelected] = useState("");
  const [newMessage, setNewMessage] = useState({});

  const notify = (msg, bgColor, color) =>
    toast(msg, { style: { backgroundColor: bgColor, color } });

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
                notify("Mensagem criada com sucesso!", "lightgreen", "black");
                setTimeout(() => history.push("/messages"), 2000);
              } else {
                notify("Preencha todos os campos!", "red", "white");
              }
            }}
          >
            Cadastrar
          </Button>
        </Col>
      </Row>
      <ToastContainer
        hideProgressBar
        closeOnClick
        draggable
        position="top-center"
      />
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
