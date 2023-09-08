
import './button.style.scss'

const BUTTON_TYPES = {
   form_button : 'form-button'
};

const Button = ({buttonType, children, ...otherProps}) =>{
    return(
        <button className={BUTTON_TYPES[buttonType]} {...otherProps}>{children}</button>
    );
}

export default Button;