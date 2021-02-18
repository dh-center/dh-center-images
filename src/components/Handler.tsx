import {ReactElement} from "react";
import {Button, Checkbox, Form, Input} from "antd";

function Handler(): ReactElement {
  const filters = [
    {
      label: 'Grayscale',
      value: 'grayscale'
    },
    {
      label: 'Flip',
      value: 'flip'
    },
    {
      label: 'Invert',
      value: 'invert'
    },
    {
      label: 'Mirror',
      value: 'mirror'
    }
  ]
  const onFinish = (values: any) => {
    console.log('Success:', values);
  }

  return (
    <Form
      name="handler"
      onFinish={onFinish}
    >
      <Form.Item
        label="Image key"
        name="key"
        rules={[
          {
            required: true,
            message: 'Please input image key!'
          }
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="Filters"
        name="filters"
      >
        <Checkbox.Group options={filters}/>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
        >
          Handle image
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Handler;
