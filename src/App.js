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
import RedditHome from './reddit/RedditHome';
import CreatePost from './reddit/CreatePost';
import RedditProfile from './reddit/RedditProfile';
import PostDetails from './reddit/PostDetails';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app__main">
        <BrowserRouter>
          <HeaderScreen />
          <Switch>
            <Route path='/register' component={RegisterScreen} />
            <Route path='/login' component={LoginScreen} />
            <PrivateRoute exact path='/' component={HomeScreen}/>
            <PrivateRoute path='/reddit/home' component={RedditHome}/>
            <PrivateRoute path='/reddit/create-post' component={CreatePost}/>
            <PrivateRoute path='/reddit/profile' component={RedditProfile}/>
            <PrivateRoute path='/reddit/post/details' component={PostDetails}/>
          </Switch>
        </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
