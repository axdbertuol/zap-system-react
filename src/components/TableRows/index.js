import React, { useMemo } from "react";
import { Button } from "react-bootstrap";

const TableRow = ({ data, keys, action }) => {
  const memoizedRow = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(data).filter((row) => keys.includes(row[0]))
      ),
    [data, keys]
  );
  return (
    <tr>
      {keys.map((key, index) => {
        if (key === "id") {
          return null;
        }
        return <td key={memoizedRow.id + "-" + index}>{memoizedRow[key]}</td>;
      })}
      <td>
        <Button
          variant="dark"
          onClick={() => console.log("id", memoizedRow.id)}
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
      keys={["trigger", "channel", "timer", "id"]}
      key={message.id + "_" + message.timer}
      // action=
    />
  ));
};

export default TableRows;
