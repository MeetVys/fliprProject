import { useRef } from "react";

const Create = () => {
    const emailInputRef = useRef() ;
    const emailInputRefcc = useRef() ;
    const startTime = useRef() ;
    const body = useRef() ;
    return (<div>
        <div>
            <label htmlFor='email'>To: </label>
            <input type='email' id='email' ref={emailInputRef} required />    
        </div>
        <div>
            <label htmlFor='email'>CC: </label>
            <input type='email' id='email' ref={emailInputRefcc} required />    
        </div>
        <div>
            <label htmlFor='Text'>Body: </label>
            <input type='text' id='text' ref={body} required />    
        </div>
        <div>
            <label htmlFor='date and time'>Time: </label>
            <input type="datetime-local" id='timesstamp' ref={startTime} required />    
        </div>
        <select name="scheduler" >
            <option value="30s">30 seconds interval</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            
        </select>
    </div>)
};

export default Create ;