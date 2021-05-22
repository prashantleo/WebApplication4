import logo from './logo.svg';
import './App.css';
import {store} from "./actions/store"
import {Provider} from "react-redux"
import Customers from './components/Customers';
import Container from '@material-ui/core/Container'

function App() {
  return (
 <Provider store={store}>
   
   <Customers/>
  
 </Provider>
  );
}

export default App;
