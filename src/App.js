import './App.css';
import Header from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/appStore';

function App() {

  return (
    <Provider store ={store}>
      <div className="App dark">
        <Header/>
        <Body/>
      </div>
    </Provider>
  );
}

export default App;
