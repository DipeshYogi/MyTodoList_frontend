import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import './App.css';
import PrivateRoute from './services/PrivateRouter';
import HomeScreen from './web/home';
import HeaderScreen from './web/header';
import RegisterScreen from './web/auth/register';
import LoginScreen from './web/auth/login';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <HeaderScreen />
          <Switch>
            <Route path='/register' component={RegisterScreen} />
            <Route path='/login' component={LoginScreen} />
            <PrivateRoute exact path='/' component={HomeScreen}/>
          </Switch>          
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
