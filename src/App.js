import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import "@aws-amplify/ui-react/styles.css";
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <App />
      </header>
    </div>
  );
}

export default App;
