import Mailinfo from "./MailInfo";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './Homepage.css' ;
const Homepage = () => {
    const data = [{
        id: 1,
        body: 'MEEt vahaeoihf'
    },
    {
        id: 2,
        body: 'MEEt 2 vahaeoihf'
    }];

    return (
        <>
        <br></br>
        <br></br>

        <Container className="homepageouter">
                {data.map((obj) => {
                    return (<>  <Row>
                        
                        <Mailinfo id={obj.id} body={obj.body}></Mailinfo>
                        
                    </Row>
                    <br></br></>
                   )
                })
                }
            </Container>
        
            

        </>

    )

};

export default Homepage;