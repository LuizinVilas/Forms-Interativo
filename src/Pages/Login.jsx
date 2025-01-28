import './App.css';
import { Link } from 'react-router-dom'

function Login(){
    return (
        <>
           <form className='Container' id='FadeInElement'>
                <h1>Login</h1>
                <input type="text" placeholder='Username' required/>
                <input type="password" placeholder='Password' required/>
                <button>Submit</button>
                <Link to="/CreateAccount"><a href='#'> Don't have a account? </a></Link>
            </form> 
        </>
    ) 
}

export default Login