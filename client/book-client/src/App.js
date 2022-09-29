import './App.css';


import {
  Routes,
  Route,
} from "react-router-dom";

import Main from './components/Main.js';
import Register from './components/Register.js';
import Login from './components/Login.js';

function App() {
  return (
    <>

      <Routes>

        <Route path="/" element={<Main />} />
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>

      </Routes>
    </>
  );
}

export default App;

//Note : in-line styling in React JSx must be sent as object)key-value pair