import logo from './logo.svg';
import './App.css';

import Templete from './templetes/templete';
import { MycontextProvider } from './context/GLobalstate';
import { Provider } from 'react-redux';
import store from './redux/Store';
function App() {
  return (
    <div className="App">
      {/* <MycontextProvider>
        <Templete />
      </MycontextProvider> */}
      <Provider store={store} >
        <Templete />
      </Provider>
    </div>
  );
}

export default App;
