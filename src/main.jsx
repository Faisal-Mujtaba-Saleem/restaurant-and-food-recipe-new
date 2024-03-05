import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from './app/store'
import { Provider } from 'react-redux'
import './index.css';
import { RefContextProvider } from './contexts/RefContext.jsx';
import { AlertContextProvider } from './contexts/AlertContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RefContextProvider>
        <AlertContextProvider>
          <div className="overflow-x-hidden">
            <App />
          </div>
        </AlertContextProvider>
      </RefContextProvider>
    </Provider>
  </React.StrictMode>,
)
