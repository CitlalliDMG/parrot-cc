import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <PersistGate persistor={persistor}>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </PersistGate>
    );
}

export default App;
