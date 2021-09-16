import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import * as yup from "yup";
import React, { useState } from "react";

import "react-toastify/dist/ReactToastify.min.css";

import { saveNewMessage } from "../../store/modules/messaging/actions";
import Select from "../../components/Select";
import useMessages from "../../hooks/useMessages";

import "./styles.css";

const NewMessagePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [triggers, channels, timers] = useMessages();

  const notify = (msg, bgColor, color) =>
    toast(msg, { style: { backgroundColor: bgColor, color } });

  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: {
        trigger: "",
        channel: "",
        timer: "",
        message: "",
      },
      validationSchema: yup.object({
        trigger: yup
          .string()
          .oneOf(triggers.map((t) => t.name))
          .required("Campo Obrigatório"),
        channel: yup
          .string()
          .oneOf(channels.map((c) => c.name))
          .required("Campo Obrigatório"),
        timer: yup
          .string()
          .oneOf(timers.map((t) => t.timer))
          .required("Campo Obrigatório"),
        message: yup.string().required("Campo Obrigatório"),
      }),
      onSubmit: (values) => {
        if (values) {
          const id = Math.floor(Math.random() * 100000).toString();
          dispatch(saveNewMessage({ id, ...values }));
          notify("Mensagem cadastrada com sucesso.", "green", "white");
        } else {
          notify("Houve algum erro", "red", "white");
        }
      },
    });

  return (
    <Container
      fluid="md"
      style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}
    >
      <Form onSubmit={handleSubmit} style={{ padding: "10px" }}>
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
            <Button variant="dark" type="submit">
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
        <Row xs={3} style={{ border: "1px solid #CCC", padding: "10px" }}>
          <Form.Group as={Col} controlId={"triggerSelect"}>
            <Form.Label>Gatilho</Form.Label>
            <Select
              id="trigger"
              name="trigger"
              value={values.trigger}
              data={triggers}
              objKey={"name"}
              handleChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.trigger && !!touched.trigger}
            />
            <Form.Control.Feedback type="invalid">
              {errors.trigger}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Canal</Form.Label>
            <Select
              id="channel"
              name="channel"
              value={values.channel}
              data={channels}
              objKey={"name"}
              handleChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.channel && !!touched.channel}
            />
            <Form.Control.Feedback type="invalid">
              {errors.channel}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Timer</Form.Label>
            <Select
              id="timer"
              name="timer"
              value={values.timer}
              data={timers}
              objKey={"timer"}
              handleChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.timer && !!touched.timer}
            />
            <Form.Control.Feedback type="invalid">
              {errors.timer}
            </Form.Control.Feedback>
          </Form.Group>
          <Col xs={12}>
            <Form.Group className="mb-3">
              <Form.Label>Mensagem:</Form.Label>
              <Form.Control
                as="textarea"
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.message && !!touched.message}
                rows={3}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default NewMessagePage;
