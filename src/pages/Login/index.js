import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  FloatingLabel,
} from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { login } from "../../store/modules/auth/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const notify = (msg, bgColor, color) =>
    toast(msg, { style: { backgroundColor: bgColor, color } });
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: yup.object({
        email: yup
          .string("Digite um e-mail")
          .email("*Insira um e-mail válido.")
          .required("*Campo Obrigatório"),
        password: yup
          .string("Digite sua senha")
          .min(5, "*Senha precisa ter 5 caracteres")
          .required("*Campo Obrigatório"),
      }),
      onSubmit: (values) => {
        console.log(values);
        if (values) {
          dispatch(login(values.email, values.password));
          setTimeout(() => {
            history.push("/");
          }, 2000);
          // notify("Mensagem cadastrada com sucesso.", "green", "white");
        } else {
          notify("Houve algum erro", "red", "white");
        }
      },
    });
  return (
    <Container
      fluid={"md"}
      style={{
        marginTop: "50px",
      }}
    >
      <Form
        style={{
          maxWidth: "300px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          marginTop: "10px",
          border: "1px solid #CCC",
          borderRadius: "5px",
          padding: "20px",
          background: "rgba(0,0,0, 0.1)",
        }}
        onSubmit={handleSubmit}
      >
        <Row>
          <Col>
            <h2 style={{ textAlign: "center" }}>Login</h2>
          </Col>
          <Col xs={12}>
            <hr />
          </Col>
        </Row>
        <Row style={{ margin: "5px 0" }}>
          <Form.Group as={Col} xs="12" className="position-relative">
            <FloatingLabel label="Insira seu e-mail">
              <Form.Control
                type="text"
                name="email"
                id="email"
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.email && !errors.email}
                isInvalid={touched.email && !!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row style={{ margin: "5px 0" }}>
          <Form.Group as={Col} xs="12" className="position-relative">
            <FloatingLabel label="Insira sua senha" className="mb-3">
              <Form.Control
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.password && !errors.password}
                isInvalid={!!touched.password && !!errors.password}
              />

              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row style={{ margin: "5px 0", alignSelf: "center" }}>
          <Button type="submit" variant={"dark"}>
            Logar
          </Button>
        </Row>
      </Form>
      <ToastContainer
        hideProgressBar
        closeOnClick
        draggable
        position="top-center"
      />
    </Container>
  );
};

export default LoginPage;
