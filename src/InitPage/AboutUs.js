import './AboutUs.css' ;
import Carousel from 'react-bootstrap/Carousel' ;
import logoTitle from '../Photos/logoTitle.png';
import BackgroundSlider from 'react-background-slider';
import img2 from '../Photos/email.png' ;
import img3 from '../Photos/shutter1.png' ;
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
const AboutUs = (props) =>{
    const loginbuttonHandler = () => {
        props.setStatusEntry(1) ;
    }
    const signupbuttonHandler = () => {
        props.setStatusEntry(2) ;
    }


    return(
        <>
      
        <BackgroundSlider
            images={[logoTitle,img2,img3]}
        duration={10} transition={2} />


<Navbar collapseOnSelect expand=""  className="customNav">
  <Navbar.Brand href="#home" ><p className="coler">Mailing</p> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="customNav3">
    <Nav className="mr-auto" className="customNav2">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>






            <div >
              
                <h1 className="title"> <img src={logoTitle} alt='logo' className="logo"></img>Title</h1>
            </div>

            <div id="seconddiv">
                About Us
            </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>

           
            <div>
                <button className="login" onClick={loginbuttonHandler} >Login</button> 
                <button className="sig" onClick={signupbuttonHandler} >Sign Up</button> 
            </div>
        </>
    );
} ;

export default AboutUs ;