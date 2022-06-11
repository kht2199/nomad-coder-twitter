import React, {useState} from 'react';
import ContentRouter from "components/ContentRouter";
import fa from 'fa';
import {Layout} from "antd";

const {Header, Sider, Content, Footer} = Layout;

function App() {
    const [user, setUser] = useState(fa.auth.currentUser);

    return (
        <Layout>
            <Header>
                <span style={{color: 'white'}}>header</span>
            </Header>
            <Content style={{padding: '50px 50px'}}>
                <ContentRouter user={user}/>
            </Content>
            <Footer>&copy;NWitter {new Date().getFullYear()}</Footer>
        </Layout>
    );
}

export default App;
