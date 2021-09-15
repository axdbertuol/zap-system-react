import { Form } from "react-bootstrap";

const Select = ({ id, name, value, data, objKey, handleChange, isInvalid }) => (
  <Form.Select
    id={id}
    name={name}
    onChange={handleChange}
    isInvalid={isInvalid}
  >
    <option value={value}></option>
    {data &&
      data.map((item, index) => (
        <option key={index + "_" + item.id} value={item[objKey]}>
          {item[objKey]}
        </option>
      ))}
  </Form.Select>
);

export default Select;
