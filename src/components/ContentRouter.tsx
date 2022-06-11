import {HashRouter, Route, Routes} from 'react-router-dom';
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Auth from "../routes/Auth";
import {User} from "@firebase/auth";
import {useEffect} from "react";

const ContentRouter = (props: {user: User | null}) => {
    const {user} = props;
    return (
        <HashRouter>
            <Routes>
            {user ?
                <>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/home'} element={<Home />} />
                    <Route path={'/profile'} element={<Profile />} />
                </>
                :
                <>
                    <Route path={'/'} element={<Auth />}/>
                </>
            }
            </Routes>
        </HashRouter>
    )
}

export default ContentRouter;
