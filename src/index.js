import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import store from './stores';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
  <React.StrictMode>
    {/* The Firebase Context from the Firebase module (folder) is used 
    to provide a Firebase instance to your entire application
     Simply create the Firebase instance with the Firebase class
      and pass it as value prop to the React's Context */}
    <Provider {...store}>
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
