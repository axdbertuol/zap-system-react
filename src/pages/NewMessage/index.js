import {
  Col,
  Container,
  Row,
  Button,
  Form,
  DropdownButton,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import * as yup from "yup";
import DOMPurify from "dompurify";
import Picker from "emoji-picker-react";
import React, { useEffect, useState } from "react";

import "react-toastify/dist/ReactToastify.min.css";

import { saveNewMessage } from "../../store/modules/messaging/actions";
import Select from "../../components/Select";
import useMessages from "../../hooks/useMessages";

import "./styles.css";

const NewMessagePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [triggers, channels] = useMessages();

  let schema = yup.object({
    trigger: yup.string().oneOf(
      triggers.map((t) => t.name),
      "Deve ser um dos valores da lista"
    ),
    channel: yup.string().oneOf(
      channels.map((c) => c.name),
      "Deve ser um dos valores da lista"
    ),
    timer: yup
      .string()
      .matches(
        /(^[01][0-4]|2[0-3]):([0-5][0-9])$/,
        "Formato inválido. Tente algo assim 23:40"
      ),
    message: yup.string().required("Campo Obrigatório"),
  });

  const [formValues, setFormValues] = useState({
    trigger: "",
    channel: "",
    timer: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    trigger: "",
    channel: "",
    timer: "",
    message: "",
  });

  const notify = (msg, bgColor, color) =>
    toast(msg, { style: { backgroundColor: bgColor, color } });

  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isValidForm = await schema.validate({ ...formValues });
      console.log(isValidForm);
      if (isValidForm) {
        const id = Math.floor(Math.random() * 100000).toString();

        dispatch(saveNewMessage({ id, ...formValues }));
        notify("Mensagem cadastrada com sucesso.", "green", "white");
      }
    } catch (error) {
      if (Array.isArray(error)) {
        error.map((err) => setErrors({ ...errors, [err.path]: err.message }));
      } else {
        notify("Houve algum erro no campo " + error.path, "red", "white");
        setErrors({ ...errors, [error.path]: error.message });
      }
      console.log({ error });
    }
  };
  const handleOnChange = (e) => {
    let splitValue = e.target.value.split("");
    if (e.target.name === "timer") {
      // check if user is deleting if so delete
      if (e.target.value.length < formValues[e.target.name].length) {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
        return;
      }
      // check what user is typing
      const forbiddenLetter = splitValue.map(
        (l, index) => !!l.match(/([0-9])/) || !(l === ":" && index > 2)
      );
      if (forbiddenLetter.includes(false)) {
        setErrors({ ...errors, [e.target.name]: "Somente número e :" });
        return;
      }

      // check min length
      if (splitValue.length > 5) {
        return;
      }
      // check and adds '0' to first element if user is typing smth like '1:'
      if (splitValue[1] === ":") {
        splitValue = ["0", ...splitValue];
      }
      // check and adds ':' to last element if user is typing smth like '12'
      if (splitValue.length === 2) {
        splitValue = [...splitValue, ":"];
      }
    }

    setErrors({ ...errors, [e.target.name]: "" });
    setFormValues({ ...formValues, [e.target.name]: splitValue.join("") });
  };
  const handleOnBlur = (e) => {
    schema.validateAt(e.target.name, e.target.value).catch(function (err) {
      setErrors({ ...errors, [err.path]: err.message });
    });
  };

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(formValues.message),
  });

  useEffect(() => {
    if (chosenEmoji) {
      formValues.message += chosenEmoji.emoji;
      setChosenEmoji(null);
    }
  }, [chosenEmoji, formValues]);

  return (
    <Container fluid="md" className={"w-75 my-auto"}>
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
            <Button
              variant="outline-dark"
              className="mx-1"
              onClick={() => history.goBack()}
            >
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
        <Row
          xs={3}
          lg={4}
          className="py-3"
          style={{
            border: "1px solid #CCC",
            padding: "10px",
            justifyContent: "center",
          }}
        >
          <Form.Group as={Col}>
            <Form.Label>Gatilho</Form.Label>
            <Select
              id="trigger"
              name="trigger"
              value={formValues.trigger}
              data={triggers}
              objKey={"name"}
              handleChange={handleOnChange}
              onBlur={handleOnBlur}
              isInvalid={!!errors.trigger}
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
              value={formValues.channel}
              data={channels}
              objKey={"name"}
              onBlur={handleOnBlur}
              handleChange={handleOnChange}
              isInvalid={!!errors.channel}
            />
            <Form.Control.Feedback type="invalid">
              {errors.channel}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Timer</Form.Label>

            <Form.Control
              type="text"
              name="timer"
              id="timer"
              placeholder={
                "Ex: " + new Date().toLocaleTimeString("pt-BR").substr(0, 5)
              }
              value={formValues.timer}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              isInvalid={!!errors.timer}
            />
            <Form.Control.Feedback type="invalid">
              {errors.timer}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} lg={9} className="mt-3">
            <Form.Label>Mensagem:</Form.Label>
            <Form.Control
              as="textarea"
              id="message"
              name="message"
              placeholder="Você pode formatar a mensagem com tags html. Ex: <b>message</b>"
              value={formValues.message}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              rows={3}
            />
          </Form.Group>
          <Col xs={12} lg={9} className="mt-1">
            <DropdownButton
              variant="secondary"
              id="dropdown-emoji"
              title="&#128515;"
            >
              <Picker onEmojiClick={onEmojiClick} />
            </DropdownButton>
          </Col>
        </Row>
        {formValues.message && (
          <Row
            style={{
              padding: "20px",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <h5 className={"text-center"}>Sua mensagem aparecerá assim:</h5>
            <Col
              className={"text-center"}
              dangerouslySetInnerHTML={sanitizedData()}
            />
          </Row>
        )}
      </Form>
    </Container>
  );
};

export default NewMessagePage;
