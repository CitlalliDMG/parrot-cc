import { useState, ChangeEvent, MouseEvent } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Switch,
    FormControlLabel,
    FormGroup,
    MenuItem,
    Menu,
    Grid,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

type Props = {
    children: JSX.Element;
};

export default function Layout({ children }: Props) {
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid
            container
            justifyContent="space-between"
            direction="column"
            style={{ minHeight: '100vh', width: '100%' }}
        >
            <Grid item>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={auth}
                                onChange={handleChange}
                                aria-label="login switch"
                            />
                        }
                        label={auth ? 'Logout' : 'Login'}
                    />
                </FormGroup>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            ParrotMenu
                        </Typography>
                        {auth && (
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>
                                        Mi perfil
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        Cerrar sesión
                                    </MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid item>{children}</Grid>
            <Grid item>
                <Grid
                    container
                    p={2}
                    justifyContent="center"
                    direction="column"
                >
                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                            fontWeight: '500',
                            textAlign: 'center',
                            color: 'primary.light',
                        }}
                    >
                        Coding challenge - Citlalli Del Moral,{' '}
                        {new Date().getFullYear()}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}
