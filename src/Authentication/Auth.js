import { useEffect ,useRef, useState} from "react";

const Auth = () => {
    const emailInputRef = useRef() ;
    const passwordInputRef = useRef() ;
    const [isLogin , setIsLogin] = useState(true) ;

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };



    return (<div>
        <h2>Welcome!!!!</h2>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form>
            <div>
                <label htmlFor='email'>Your Email</label>
                <input type='email' id='email' ref={emailInputRef} required />    
            </div>
            <div>
                <label htmlFor='password'>Your Password</label>
                <input type='password' id='password' ref={passwordInputRef} required />
            </div>

            <div>
                <button>{isLogin ? 'Login' : 'Create Account'}</button>
                <button
                    type='button'
                    
                    onClick={switchAuthModeHandler}
                >
                    {isLogin ? 'Create new account' : 'Login with existing account'}
                </button>
                <button>LOgin via gsyc</button>
            </div>
        </form>
    </div>)
} ;

export default Auth ;