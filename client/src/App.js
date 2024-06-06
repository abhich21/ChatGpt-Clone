import logo from './logo.svg';
import './normal.css'
import './App.css';


function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+ </span>
          New chat
        </div>
      </aside>
      <section className="chatbox" >
        <div className="chat-input-holder">
          <textarea className="chat-input-teatarea" rows="1"
           ></textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
