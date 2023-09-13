import Authentication from './routes/authentication/authentication.component';
import ChatDashboard from './routes/chatDashboard/chatDashboard.component';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Authentication className='signIn-component'/> */}
      <ChatDashboard></ChatDashboard>
    </div>
  );
}

export default App;
