import { Form } from "react-bootstrap";

const Select = ({
  id,
  name,
  value,
  data,
  objKey,
  handleChange,
  isInvalid,
  onBlur,
  ...props
}) => (
  <Form.Select
    id={id}
    name={name}
    onChange={handleChange}
    isInvalid={isInvalid}
    onBlur={onBlur}
    {...props}
  >
    <option default value={""}></option>
    {Array.isArray(data) &&
      data.map((item, index) => (
        <option key={index + "_" + item.id} value={item[objKey]}>
          {item[objKey]}
        </option>
      ))}
  </Form.Select>
);

export default Select;
