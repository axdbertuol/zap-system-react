import { Spinner } from "react-bootstrap";
import React from "react";

const Loading = () => {
  return (
    <div className="mx-auto">
      <Spinner animation="border" variant="dark" />
    </div>
  );
};

export default Loading;
