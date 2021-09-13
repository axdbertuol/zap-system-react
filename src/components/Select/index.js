import { Form } from "react-bootstrap";

const Select = ({ data, objKey }) => (
  <Form.Select>
    <option value=""></option>
    {data &&
      data.map((item, index) => (
        <option key={index + "_" + item.id} value={item[objKey]}>
          {item[objKey]}
        </option>
      ))}
  </Form.Select>
);

export default Select;
