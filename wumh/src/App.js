import './styles/App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import LoginPage from './pages/loginPage';
import Homepage from './pages/Homepage';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/home" component={Homepage} />
      </Router>
    </div>
  );
}

export default App;
