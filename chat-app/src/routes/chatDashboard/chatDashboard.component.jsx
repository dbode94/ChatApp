import ContactConsole from "../../components/contactConsole/contactConsole.component";
import MessageConsole from "../../components/messageConsole/messageConsole.component";

import './chatDashboard.style.scss'

const ChatDashboard = () =>{
    return(
        <div className="dashboard">
            <ContactConsole className='contactConsole'/>
            <MessageConsole/>
        </div>
    )
}

export default ChatDashboard;