import './App.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'

function CreateAccount(){
    const [Username, SetUsername] = useState('');
    const [Password, SetPassword] = useState('');
    const [ConfirmPassword, SetConfirmPassword] = useState('');

    async function EnviarRequisicao(event) {
        event.preventdefault();
        const DadosForms = {Username: Username, Password: Password, ConfirmPassword: ConfirmPassword}
        await fetch('127.0.0.1:3000/ProcessarDados', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(DadosForms)
        })
        .then(Response => Response.json())
        .then()
    }

    return (
        <>
           <form className='Container' id='FadeInElement' onSubmit={EnviarRequisicao}>
                <h1>Create Account</h1>
                <input type="text" placeholder='Username' value={Username} onChange={(event) => SetUsername(event.target.value)} required/>
                <input type="text" placeholder='Password' value={Password} onChange={(event) => SetPassword(event.target.value)} required/>
                <input type="password" placeholder='Confirm Password' value={ConfirmPassword} onChange={(event) => SetConfirmPassword(event.target.value)} required/>
                <button>Submit</button>
                <Link to="/"><a href='#'>Already have a account?</a></Link>
            </form> 
        </>
    ) 
}

export default CreateAccount