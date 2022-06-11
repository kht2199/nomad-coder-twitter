import {HashRouter, Route, Routes} from 'react-router-dom';
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Auth from "../routes/Auth";

const Router = (props: {isLoggedIn: boolean}) => {
    const {isLoggedIn} = props;
    return (
        <HashRouter>
            <Routes>
            {isLoggedIn ?
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

export default Router;