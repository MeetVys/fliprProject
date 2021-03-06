import './SignUp.css';
import axios from 'axios' ;
import { useRef, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gicon from '../Photos/gicon.png';
const SignUp = (props) => {
    const API = axios.create({baseURL:'http://localhost:5000'});
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const name = useRef() ;
    const [isLogin, setIsLogin] = useState(true);

  
    const loginhandler = ()=>{
        props.setStatusEntry(1) ;
    }

    async function addUser(userdata) {
        const response = await fetch('http://localhost:5000/user/signup',{
          method:'POST',
          body: JSON.stringify(userdata) ,
          headers:{
            'Content-Type':'application/json'
          }  
        })
        const data = await response.json() ;
        console.log(data) ;
        //console.log(movie);
    }
    const SignUpHandler = (Event) =>{
        Event.preventDefault() ;
        console.log(emailInputRef.current.value) ;
        console.log(passwordInputRef.current.value) ;
        console.log(name.current.value) ;
        const objUser = {   email: emailInputRef.current.value,
                        password:passwordInputRef.current.value,
                        name:name.current.value
                    }
        addUser(objUser) ;
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
                        <h1>Sign Up to get Started!!!</h1>
                        <br></br>
                        <h1>T&C</h1>
                    </Container>
                </Col> 
                <Col md={4} lg = {3} className="wrapper"> <h2>Sign Up</h2>
                    <form>
                    <div className="inputs">
                           
                           <input type='text' id='name' className="cusbox"  placeholder="     Name" ref={name} required />
                       </div>

                        <div className="inputs">
                           
                            <input type='email' id='email' className="cusbox"  placeholder="     Email" ref={emailInputRef} required />
                        </div>
                        <div className="inputs">
                            
                            <input type='password' id='password' className="cusbox" placeholder="     Password" ref={passwordInputRef} required />
                           
                        </div>
                       
                        <br></br>
                        <div>
                            <button  className="login" onClick={SignUpHandler}>Sign Up</button>
                          
                           
                        </div>
                        <hr style={{width:"80%" , borderWidth:"3px", borderColor:"black"}}></hr>
                        
                        
                    </form>

                    <div>
                        <p>Or Sign Up With</p>
                        <button className="gsync"><img src={gicon} style={{width:"10%"}}></img>  Sign Up with Google</button>
                    </div>
                    <br></br>
                    <div style={{textAlign:"left"}}>
                        <a href="">Already Singed Up? </a>
                        <button className="signup" onClick={loginhandler}> Login</button>
                    </div>
                    <br></br>

                </Col >
                <Col md={2}></Col>
            </Row>

        </Container>




    </div>)
} ;

export default SignUp ;