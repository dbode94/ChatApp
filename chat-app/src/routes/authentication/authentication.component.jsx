import AuthForm from '../../components/authForm/authForm.component';
import { useState, useEffect } from 'react';
import './authentication.style.scss'

const Authentication = () =>{

    const defaultFormFields = {
        firstName:'',
        lastName:'',
        email:'',
        password:''
    }

    const [isRegister,setRegister] = useState(false);
    const [formFields,setFormFields] = useState(defaultFormFields);
    
    
    
    const handleRegisterClick = () =>{
        setRegister(!isRegister)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const info = {}
        for (let index = 0; index < e.target.length - 1; index++) {      
            const {name,value} = e.target[index];
            console.log(name,value);
            info[name] = value;
        }
        setFormFields({...formFields, ...info});
    }

    useEffect(()=>{ console.log(formFields)},[formFields]);
    
    return(
        <div className='signIn-container'>
            {
                isRegister? 
                <div>
                    <h3 className='h3-title'>Wellcome! Who are you? 🙂</h3>
                    <AuthForm formType='register' handleSubmit={handleSubmit}/> 
                    <p style={{textAlign : 'center', marginBottom: '1px'}}>Already have an account? </p>
                    <p style={{textAlign : 'center', textDecoration: 'underline', cursor: 'pointer', marginTop: '0px'}} onClick={handleRegisterClick}>Log In</p>     
                </div>
                :
                <div>
                    <h3 className='h3-title'>Log In</h3>
                    <AuthForm formType='logIn' handleSubmit={handleSubmit}/>
                    <p style={{textAlign : 'center', marginBottom: '1px'}}>Don't have an account? </p>
                    <p style={{textAlign : 'center', textDecoration: 'underline', cursor: 'pointer', marginTop: '0px'}} onClick={handleRegisterClick}>Register</p>  
                </div>
            }
        </div>
    )
}

export default Authentication;