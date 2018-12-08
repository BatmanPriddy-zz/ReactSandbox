import React, { Component } from 'react';
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <AddContact />

                <Contacts />
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
