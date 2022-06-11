import React, {useState} from 'react';
import Router from "./Router";
import Auth from 'firebase/auth';
import firebase from '../firebase';

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);


  return (
      <>
        <Router isLoggedIn={isLoggedIn} />
        <footer>&copy;NWitter {new Date().getFullYear()}</footer>
      </>
  );
}

export default App;
