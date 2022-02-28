import { Navigate } from 'react-router-dom';
import { RootState } from '../store/reducers';
import { useSelector } from 'react-redux';

type RequireAuthProps = {
    children: JSX.Element;
    redirectTo: string;
};

export default function RequireAuth({
    children,
    redirectTo,
}: RequireAuthProps) {
    let loginState = useSelector((state: RootState) => state.login);
    let isAuthenticated = loginState.data.access ? true : false;

    return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
