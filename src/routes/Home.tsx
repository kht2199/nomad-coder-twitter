import {Button, Form, Input} from "antd";
import {libs, db} from "../fa";
import {useEffect, useState} from "react";

interface Tweet {
    text: string;
    created?: number;
}

const Home = () => {
    const [form] = Form.useForm();
    const [tweets, setTweets] = useState([] as Tweet[]);
    const onFinish = async () => {
        const values = await form.validateFields() as Tweet;
        const collection = libs.firestore.collection(db, 'tweets');
        await libs.firestore.addDoc(collection, {
            ...values,
            created: Date.now(),
        });
        updateTweets();
    }
    const updateTweets = () => {
        const collection = libs.firestore.collection(db, 'tweets');
        libs.firestore.getDocs(collection)
            .then(tweets => tweets.docs.map(d => d.data() as Tweet))
            .then(t => setTweets(t));
    }
    useEffect(() => updateTweets(), [])
    console.log(tweets);
    return <>
        {tweets.map((t, idx) => (
            <div key={idx}>
                <span>{t.text} {t.created && new Date(t.created).toLocaleString()}</span>
            </div>
        ))}
        <Form form={form} onFinish={onFinish}>
            <Form.Item name={'text'}>
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type={'primary'} onClick={onFinish}>Submit</Button>
            </Form.Item>
        </Form>
    </>
}

export default Home;
