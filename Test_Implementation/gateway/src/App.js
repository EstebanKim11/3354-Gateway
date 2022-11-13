import './App.css';
import { Route } from 'react-router-dom';
import Login from './Login.js'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={null} />
      <Route exact path='/login' component={Login} />
    </div>
  );
}

export default Login;
