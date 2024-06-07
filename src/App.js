import './App.css';
import Joke from './joke';

function App() {
  return (
    <>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand m-2 display-5" href="/#">Joke Generator</a>
        </div>
      </nav>
      <div className="text-center">
      <Joke/>
      </div>
    </>
  );
}

export default App;
