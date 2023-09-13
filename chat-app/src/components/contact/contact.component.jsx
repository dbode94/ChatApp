
import './contact.style.scss'

const Contact = ({imageSrc,firstName, lastName, lastMessage, Mystyle}) =>{
    const initials = (firstName[0] + lastName[0]).toLocaleUpperCase();
    return(
        <div className='contact-container'>
            <div className='image-container'>
                {
                    imageSrc? <img src="" alt="" /> : initials
                }
            </div>
            <div className='name-container' style={Mystyle}>
                <div>{(firstName + ' ' + lastName).toLocaleUpperCase()}</div>
                <div style={{fontStyle:'italic'}}>{lastMessage}</div>
            </div>
        </div>
    )
}

export default Contact;