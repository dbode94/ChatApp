import ContactList from "../contactList/contactList.component";
import { useState } from "react";

import './contactConsole.style.scss'

const ContactConsole = ({className}) =>{

    const contacts = [
        {
            imageSrc: '',
            firstName: 'Dennis', 
            lastName: 'Bode', 
            lastMessage: ''
        },
        {
            imageSrc: '',
            firstName: 'Penelope', 
            lastName: 'Seijo', 
            lastMessage: 'Love you ❤️'
        },
        {
            imageSrc: '',
            firstName: 'Lazaro', 
            lastName: 'Casanola', 
            lastMessage: ''
        },
        {
            imageSrc: '',
            firstName: 'Rainel', 
            lastName: 'Rodrigues', 
            lastMessage: 'Hello'
        },
        {
            imageSrc: '',
            firstName: 'Jose', 
            lastName: 'Bueno', 
            lastMessage: ''
        },
    ]

    const [currentChats, setCurrentChats] = useState(contacts.filter((contact)=> contact.lastMessage !== ''));
    const [currentContacts,setContacts] = useState(contacts);
    const [isSearchable, setSearchable] = useState(false);

    const searchHandler = (event) =>{
        setContacts(contacts.filter((contact) => (contact.firstName + contact.lastName).toLowerCase().includes(event.target.value)));
    }

    //Displays recents chats or (contacts + search input)
    const contactsOnClickHandler = (event) =>{
        setSearchable(true);
        if(!event.target.className.includes('focus')){
            const chats = document.getElementById('chats');
            chats.className = chats.className.replace(/focus/g, '');
            event.target.className += ' focus';
            setContacts(contacts) //I don't like this
        }
    }

    const chatsOnClickHandler = (event) =>{
        setSearchable(false);
        if(!event.target.className.includes('focus')){
            const contactsDiv = document.getElementById('contacts');
            contactsDiv.className = contactsDiv.className.replace(/focus/g,'');
            event.target.className += ' focus';
        }
    }
    
    return(
        <div className={`contactConsole-container ${className}`}>
            <div className="contactConsoleOptions-container">
                <div className="chatsOption focus" onClick={chatsOnClickHandler} id="chats">Chats</div>
                <div className="contactConsole-verticalLine"></div>
                <div className="contactOption" onClick={contactsOnClickHandler} id="contacts">Contacts</div>
            </div>
            {
                isSearchable? <div>
                    <input type="search" name="contactSearch" placeholder="Search" className="contactSearch" onChange={searchHandler}/>
                    <ContactList contacts={currentContacts}/>
                </div> : <ContactList contacts={currentChats}/>
            }
           
        </div>
    );

}        


export default ContactConsole;