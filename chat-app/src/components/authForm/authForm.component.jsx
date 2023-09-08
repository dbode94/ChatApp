import Button from '../button/button.component';
import './authForm.style.scss'

const FORM_TYPE = {
    logIn: 'Log In',
    register: 'Register'
}

const AuthForm = ({formType,handleSubmit}) =>{


    return(        
        <form onSubmit={handleSubmit} className="login-form">
            {
                FORM_TYPE[formType] === 'Register'?
                <div className='nameInput-container'>
                    <input type="text" name='firstName' placeholder='First name'/>
                    <input type="text" name='lastName' placeholder='Last name'/>
                </div>
                :
                null     
            }   
            <input type="email" name='email' placeholder='Email'/>
            <input type="password" name='password' placeholder="Password"/>
            <Button type='submit' buttonType='form_button'>{FORM_TYPE[formType]}</Button>
        </form>    
    );
}

export default AuthForm;