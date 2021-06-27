import './MailInfo.css' ;
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import MailBody from './MailBody';
const Mailinfo = (props) => {
    const [toshow, setTOshow] = useState(false) ;
    const id = props.id ;
    const body = props.body;
    const toshowHandler = () =>{
        setTOshow((prevState)=> !prevState) ;
    }
    return (<Container className="MailInfoOuter">
        <br></br>
        <p style={{fontWeight:"700"}}>{id}</p>
        <br>
        </br>
        <p>{body}</p>

        <button onClick={toshowHandler}> Show Body</button>
        {toshow && <MailBody body={body}> </MailBody>}
        <hr>
        </hr>
        <hr>
        </hr>
    </Container>)

};

export default Mailinfo;