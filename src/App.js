import RouterComponent from './RouterComponent';
// import Login from '../components/SignIn/Login';
import Home from './components/Home';
import { Provider } from 'react-redux';
// import { store } from 'state/store';


function App() {
  return (
    <div className="">
    <Provider>
      <RouterComponent />
      {/* <Home /> */}
    </Provider>
    </div>
  );
}

export default App;
