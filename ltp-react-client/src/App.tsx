import './App.css';
import { Navigator } from './components/navigator/Navigator';

function App() {
	return (
        <div className="App">
            <h1 style={{
				background: "hsl(0, 0%, 95%)",
				margin: "0",
				padding: 16
			}}>LTP Kalkulator</h1>
            <Navigator />
        </div>
    );
}

export default App;
