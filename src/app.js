import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import MessagesContainer from './components/MessagesContainer';
import AddContainer from './components/AddContainer';
import Footer from './components/Footer';
import Header from './components/Header';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="wrapper">
        <div className="container-fluid">
          <Header />
          <Route exact path="/" component={MessagesContainer}/>
          <Route path="/add" component={AddContainer}/>
          <Route path="/edit/:id" component={AddContainer}/>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
