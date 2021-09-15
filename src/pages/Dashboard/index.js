import React from "react";
import { Container } from "react-bootstrap";
import HorizontalBarChart from "../../components/HorizontalBarChart";
import LineChart from "../../components/LineChart";

const Dashboard = () => {
  return (
    <Container
      fluid="md"
      style={{
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "16px",
      }}
    >
      <HorizontalBarChart />
      <hr />
      <LineChart />
    </Container>
  );
};

export default Dashboard;
