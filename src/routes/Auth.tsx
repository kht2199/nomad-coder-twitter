import {Button, Checkbox, Col, Form, Input, notification, Row} from "antd";
import {authentication} from 'fa';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import {useState} from "react";
import {FirebaseError} from '@firebase/util';
import firebase from "firebase/compat";
import {GoogleAuthProvider} from "@firebase/auth";


const buttonProps = {
    style: {
        width: '100%'
    }
};

const Auth = () => {
    const [form] = Form.useForm();
    const onFinish = async () => {
        const values = await form.validateFields();
        const {email, password} = values;
        try {
            newAccount
                ? await createUserWithEmailAndPassword(authentication, email, password)
                : await signInWithEmailAndPassword(authentication, email, password)
        } catch (err) {
            const isFirebaseError = err instanceof FirebaseError;
            if (!isFirebaseError) {
                return;
            }
            notification['error']({
                message: err.name,
                description: err.message,
            });
        }
    }
    const [newAccount, setNewAccount] = useState(false);
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
            <Form.Item wrapperCol={{offset: 8}}>
                <Row gutter={8}>
                    <Col span={4}>
                        <Button type="primary" htmlType="submit" {...buttonProps}>
                            {newAccount ? 'Join' : 'Submit'}
                        </Button>
                    </Col>
                    <Col span={4}>
                        <Button htmlType="button" onClick={() => form.resetFields()} {...buttonProps}>
                            Clear
                        </Button>
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8}}>
                <Row>
                    <Col span={8}>
                        <Button type="primary" onClick={() => setNewAccount(!newAccount)} {...buttonProps}>
                            {newAccount ? 'Login with Email' : 'Create new Account'}
                        </Button>
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8}}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8}}>
                <Button onClick={() => signInWithPopup(authentication, new GoogleAuthProvider())}>Continue with Google</Button>
            </Form.Item>
        </Form>
    </>)
}

export default Auth;

