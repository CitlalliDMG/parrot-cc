import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import configureStore from 'redux-mock-store';
import App from './App';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

test('renders App', () => {
    const store = mockStore({
        login: {
            data: {},
            error: {},
        },
        data: {
            store: {},
            products: {},
            error: {},
        },
        error: {
            status: false,
        },
    });
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
});
