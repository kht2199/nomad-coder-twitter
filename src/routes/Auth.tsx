import {Button, Checkbox, Form, Input} from "antd";
import fa from 'fa';
import {Callbacks} from "rc-field-form/lib/interface";

const Auth = () => {
    let auth = fa.auth;
    const [form] = Form.useForm();
    const onFinish = async (values: Callbacks) => {
        console.log(values)
        await form.validateFields();
    }
    return (<>
        <Form
            form={form}
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
        >
            <Form.Item
                label={'Email'} name={'email'}
                rules={[{ required: true }]}
            >
                <Input type={'email'} placeholder={'Email'} />
            </Form.Item>
            <Form.Item
                label={'Password'} name={'password'}
                rules={[{ required: true }]}
            >
                <Input.Password placeholder={'Password'} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button onClick={() => form.resetFields()}>
                    Clear
                </Button>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8}}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8}}>
                <Button>Continue with Google</Button>
            </Form.Item>
        </Form>
    </>)
}

export default Auth;
