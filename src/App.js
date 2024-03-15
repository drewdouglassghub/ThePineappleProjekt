import logo from './logo.svg';
import './App.css';
import { 
  AnimatedIcon,
  Antdesigntwittercirclefilled,
  Button,
  Home,
  Icoutlinetiktok,
  Ionheadset,
  Ionlogoyoutube,
  Mdispotify,
  Media,
  Music,
  Navlink,
  Riinstagramline,
  Songcard,
  Uilfacebook,
  studioTheme } from './ui-components';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import "@aws-amplify/ui-react/styles.css";
Amplify.configure(awsconfig);

function App() {

  
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
