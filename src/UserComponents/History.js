import HistoryMail from "./HistoryMail";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import './History.css' ;
const History = () => {
    const data = [{
        id:1,
        body: 'MEEt vahaeoihf sent'
    },
    {
        id:2,
        body: 'MEEt 2 vahaeoihf sent'
    }] ;
   
    return (
        <>
        <br></br>
        <br></br>
            <Container className="homepageouter">
                {data.map((obj) => {
                    return (<>  <Row>
                        
                        <HistoryMail id={obj.id} body={obj.body}></HistoryMail>
                        
                    </Row>
                    <br></br></>
                   )
                })
                }
            </Container>

        </>
        
        
    )
} ;

export default History ;

