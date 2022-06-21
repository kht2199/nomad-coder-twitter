import {Button, Form, Input} from "antd";
import {libs, db, app} from "../fa";
import {useEffect, useMemo, useState} from "react";
import {User} from "@firebase/auth";
import Tweets from "../components/Tweets";

export interface Tweet {
    id?: string;
    text: string;
    created?: number;
    creatorId?: string;
}

const Home = (props: {user: User}) => {
    const {user} = props;
    const [form] = Form.useForm();
    const [tweets, setTweets] = useState([] as Tweet[]);
    const tweetsCollection = useMemo(() => libs.firestore.collection(db, 'tweets'), []);
    const onFinish = async () => {
        const values = await form.validateFields() as Tweet;
        await libs.firestore.addDoc(tweetsCollection, {
            ...values,
            created: Date.now(),
            creatorId: user.uid,
        });
    }
    const onDeleteTweet = async (id: string) => {
        const tweetsDocRef = libs.firestore.doc(db, `tweets`, id);
        await libs.firestore.deleteDoc(tweetsDocRef);
    };
    useEffect(() => libs.firestore.onSnapshot(tweetsCollection, snapshot => {
        console.log('snapshot changed', snapshot);
        setTweets(snapshot.docs.map(d => ({...d.data(), id: d.id})) as any)
    }), [])
    return <>
        <Tweets tweets={tweets} user={user} onDelete={onDeleteTweet}/>
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
