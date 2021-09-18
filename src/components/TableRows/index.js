import { Button } from "react-bootstrap";
import React, { useMemo } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";
import DOMPurify from "dompurify";

const TableRow = ({ data, keys }) => {
  const memoizedRow = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(data).filter((row) => keys.includes(row[0]))
      ),
    [data, keys]
  );

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(memoizedRow.message),
  });
  return (
    <tr>
      {keys.map((key, index) => {
        if (key === "id" || key === "message") {
          return null;
        }
        return <td key={memoizedRow.id + "-" + index}>{memoizedRow[key]}</td>;
      })}
      <td>
        <Button
          variant="dark"
          onClick={() =>
            Swal.fire({
              title: "Mensagem",
              html: sanitizedData().__html,
            })
          }
        >
          Ver Mensagem
        </Button>
      </td>
    </tr>
  );
};

const TableRows = ({ messages }) => {
  if (!Array.isArray(messages)) {
    console.log("messages", typeof messages);
    console.log("messages", messages);
    return null;
  }
  return messages.map((message) => (
    <TableRow
      data={message}
      keys={["trigger", "channel", "timer", "id", "message"]}
      key={message.id + "_" + message.timer}
    />
  ));
};

export default TableRows;
