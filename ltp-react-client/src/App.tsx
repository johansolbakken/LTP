import './App.css';
import { Signup } from './components/login/Signup';
import { Navigator } from './components/navigator/Navigator';
import { AuthProvider } from './context/AuthContext';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Signup />
                <h1 style={{
                    background: "hsl(0, 0%, 95%)",
                    margin: "0",
                    padding: 16
                }}>LTP Kalkulator</h1>
                <Navigator />
            </AuthProvider>
        </div>
    );
}

export default App;
