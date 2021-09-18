import { Form } from "react-bootstrap";

const Option = ({ value }) => <option value={value}>{value}</option>;

const Select = ({
  id,
  name,
  value,
  data,
  objKey,
  handleChange,
  isInvalid,
  onBlur,
  defaultValue,
  ...props
}) => (
  <Form.Select
    id={id}
    name={name}
    onChange={handleChange}
    isInvalid={isInvalid}
    onBlur={onBlur}
    defaultValue={defaultValue}
    {...props}
  >
    <Option value="" />
    {Array.isArray(data) &&
      data.map((item, index) => (
        <Option key={index + "_" + item.id} value={item[objKey]} />
      ))}
  </Form.Select>
);

export default Select;
