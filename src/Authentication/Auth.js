// Very important note once user is logged in set the status entry == 4

import { useRef, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gicon from '../Photos/gicon.png';
const Auth = (props) => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [isLogin, setIsLogin] = useState(true);

  
    const signuphandler = (Event)=>{
        Event.preventDefault() ;
        props.setStatusEntry(2) ;
    }

    const loginHandler = (Event) =>{
        Event.preventDefault() ;

        console.log(emailInputRef.current.value) ;
        console.log(passwordInputRef.current.value) ;
    }

    return (<div>
     

        <Container fluid >
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Row>
               
                
                <Col md={7}> 
                    <Container className="wrapper2" >
                        <h1>Login to get Started!!!</h1>
                        <br></br>
                        <h1>T&C</h1>
                    </Container>
                </Col> 
                <Col md={4} lg = {3} className="wrapper"> <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                    <form>
                        <div className="inputs">
                           
                            <input type='email' id='email' className="cusbox"  placeholder="     Email" ref={emailInputRef} required />
                        </div>
                        <div className="inputs">
                            
                            <input type='password' id='password' className="cusbox" placeholder="     Password" ref={passwordInputRef} required />
                            <a href="">Forgot Password?</a>
                        </div>
                       
                        <br></br>
                        <div>
                            <button  className="login" onClick={loginHandler}>Login</button>
                          
                           
                        </div>
                        <hr style={{width:"80%" , borderWidth:"3px", borderColor:"black"}}></hr>
                        
                        
                    </form>

                    <div>
                        <p>Or Login With</p>
                        <button className="gsync"><img src={gicon} style={{width:"10%"}}></img>  Login with Google</button>
                    </div>
                    <br></br>
                    <div style={{textAlign:"left"}}>
                        <button className="signup" onClick={signuphandler}>  SignUp </button>
                    </div>
                    <br></br>

                </Col >
                <Col md={2}></Col>
            </Row>

        </Container>




    </div>)
};

export default Auth;