
import './signin.style.scss'

const SignIn = () =>{
    return(
        <div className='signIn-container'>
            <div className="credentials-container">
                <h3>Log in</h3>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Log In</button>
            </div>
            <div className='vertical-line'></div>
            <div className='register-container'>
                <h3>No account?</h3>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>register</button>
            </div>
            
        </div>
    )
}

export default SignIn;