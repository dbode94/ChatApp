
import Contact from "../contact/contact.component";
import './contactList.style.scss'

const ContactList = ({contacts, className, ...otherprops}) =>{
    return(
        <div className={`contactList-container ${className}`} {...otherprops}>
            {/* <Contact firstName='Dennis' lastName='Bode' lastMessage='last message here'></Contact>
            <Contact firstName='Penny' lastName='Seijo' lastMessage='last message here'></Contact>
            <Contact firstName='Lazaro' lastName='Casanola' lastMessage='last message here'></Contact>
            <Contact firstName='Rainel' lastName='Rodriguez' lastMessage='last message here'></Contact> */}
            {
                contacts.map((contact, i) => {
                    const {firstName, lastName, lastMessage} = contact;
                    return <Contact firstName={firstName} lastName={lastName} lastMessage={lastMessage} key={i}></Contact>
                })
            }
        </div>
    )
}

export default ContactList;