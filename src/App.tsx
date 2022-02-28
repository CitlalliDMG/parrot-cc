import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import NotFoundPage from './pages/NotFoundPage';
import RequireAuth from './components/RequireAuth';
import {
    useMediaQuery,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogContentText,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { RootState } from './store/reducers';

function App() {
    const error = useSelector((state: RootState) => state.login.error);
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setOpen(error.status || false);
    }, [error]);

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
            <div>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">
                        Ocurrio un error
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Por favor vuelve a intentarlo más tarde.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Entendido
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </PersistGate>
    );
}

export default App;
