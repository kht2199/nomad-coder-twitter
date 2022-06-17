import React, {useEffect, useState} from 'react';
import ContentRouter from "components/ContentRouter";
import {authentication} from 'fa';
import {Button, Layout} from "antd";
import {User} from "@firebase/auth";
import Navigation from "./Navigation";

const {Header, Content, Footer} = Layout;

function App() {
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        authentication.onAuthStateChanged((changed) => {
            console.log('onAuthStateChanged', changed);
            setUser(changed);
        });
    }, []);
    return (
        <Layout>
            <Header>
                {user && <Navigation />}
                {user &&  <Button onClick={() => authentication.signOut()}>Login</Button>}
            </Header>
            <Content style={{padding: '50px 50px'}}>
                <ContentRouter user={user}/>
            </Content>
            <Footer>&copy;NWitter {new Date().getFullYear()}</Footer>
        </Layout>
    );
}

export default App;
