import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import NotFoundPage from './pages/NotFoundPage';
import RequireAuth from './components/RequireAuth';

function App() {
    return (
        <PersistGate persistor={persistor}>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route
                        path="/menu"
                        element={
                            <RequireAuth redirectTo="/">
                                <MenuPage />
                            </RequireAuth>
                        }
                    />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </PersistGate>
    );
}

export default App;
