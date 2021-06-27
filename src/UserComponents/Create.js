import { useRef } from "react";
import './Create.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const Create = () => {
    const emailInputRef = useRef();
    const emailInputRefcc = useRef();
    const startTime = useRef();
    const body = useRef();
    return (<>
        <br></br>
        <br></br>

        <Container>
            <br></br>
            <br></br>

            <Row>

                <input type='email' id='email' className="custom_create" placeholder="   To: " ref={emailInputRef} required />

            </Row>
            <br></br>
            <Row>

                <input type='email' id='email' className="custom_create" placeholder="CC: " ref={emailInputRefcc} required />

            </Row>
            <br></br>
            <Row>


                <input type='text' id='text' ref={body} placeholder="Body" className="custom_create2" required />

            </Row>
            <br></br>
            <Row>
              
                   
                <input type="datetime-local" id='timesstamp' placeholder="Fire Time"  className="custom_create3" ref={startTime} required />
            
            </Row>
            <br></br>
            <Row>
                <h4 style={{fontWeight:"800"}}>Scheduling: </h4>
                <br></br>
                <select name="scheduler" className="sch" >
                    <option value="30s">30 seconds interval</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>

                </select>
            </Row>
            <Row>
                <button className="sendmail"> Send Mail</button>
            </Row>

        </Container>
    </>
    )
};

export default Create;