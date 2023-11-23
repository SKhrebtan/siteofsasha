import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { GlobalStyles } from 'GlobalStyles';
import { ChatButton } from 'components/ChatButtons/ChatButton';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/siteofsasha">
      <App />
      <ChatButton/>
      <GlobalStyles />
    </BrowserRouter>
     </React.StrictMode>
);
