import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div>"Hello World"</div>
   <App/>
  
  </>
);
  
  
  function Home () {
    return (
      <form>
          <input type="email" placeholder='your email here'/>
          <input placeholder='displayname'/>
          <input type="password" placeholder='your password here'/>
    </form>
    )
  };


