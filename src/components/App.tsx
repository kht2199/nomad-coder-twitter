import React, {useState} from 'react';
import Router from "components/Router";
import fa from 'fa';


function App() {
    const [user, setUser] = useState(fa.auth.currentUser);

    return (
        <>
            <Router user={user}/>
            <footer>&copy;NWitter {new Date().getFullYear()}</footer>
        </>
    );
}

export default App;
