import {ReactElement} from "react";
import {Button, Form, Input} from "antd";

function Handler(): ReactElement {
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
