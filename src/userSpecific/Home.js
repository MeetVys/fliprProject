import { useState } from "react";
import Homepage from "../UserComponents/Homepage";
import History from "../UserComponents/History";
import Create from "../UserComponents/Create";
import './Home.css' ;
const Home = () => {
    const [category, setCategory] = useState(1) ;

    const HomePageButton = () =>{

        setCategory(1) ;
    }
    const HistpryPageButton = () =>{
        setCategory(2) ;
    }
    const CreatePageButton = () =>{
        setCategory(3) ;
    }

    return (<div>
        <button onClick={HomePageButton}> Home Page</button>
        <button onClick={HistpryPageButton}> History Page</button>
        <button onClick={CreatePageButton}> Create Mail </button>

        {category===1 &&<Homepage></Homepage>}
        {category===2 && <History></History>}
        {category===3 && <Create></Create>}

    </div>)
} ;

export default Home ;