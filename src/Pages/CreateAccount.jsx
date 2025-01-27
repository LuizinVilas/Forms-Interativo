import './App.css'
import { Link } from 'react-router-dom'
import App from './App'

function CreateAccount(){
    return (
        <>
           <div className='Container'>
                <h1>Create Account</h1>
                <input type="text" placeholder='Username' required/>
                <input type="text" placeholder='Password' required/>
                <input type="password" placeholder='Confirm Password' required/>
                <button>Submit</button>
                <Link to="/"><a href='#'>Already have a account?</a></Link>
            </div> 
        </>
    ) 
}

export default CreateAccount