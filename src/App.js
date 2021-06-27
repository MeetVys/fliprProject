import Auth from "./Authentication/Auth";
import Home from "./userSpecific/Home";
import AboutUs from "./InitPage/AboutUs";
import { useState } from "react";
import SignUp from "./Authentication/Signup";
// import './App.css' ;
function App() {
  const [statusEntry, setStatusEntry] = useState(0) ;
  const [userloggedin,setUserloggedin] = useState(0) ;
  
  return (
    <>
    {userloggedin===1 && <Home></Home>}
    {statusEntry===0  &&  <AboutUs statusEntry={statusEntry} setStatusEntry={setStatusEntry}></AboutUs>}

    {statusEntry===1 && <Auth statusEntry={statusEntry} setStatusEntry={setStatusEntry} ></Auth>}
    {statusEntry===2 && <SignUp statusEntry={statusEntry} setStatusEntry={setStatusEntry} ></SignUp>}
   
    </>
  );
}

export default App;
