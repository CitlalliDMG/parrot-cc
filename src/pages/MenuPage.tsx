import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Grid,
    Typography,
    Button,
    Box,
    Card,
    Paper,
    Tabs,
    Tab,
} from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import Layout from '../components/Layout';
import TabMenu from '../components/TabMenu';
import * as actionsData from '../store/actions/AData';
import { RootState } from '../store/reducers';

export default function MenuPage() {
    const dispatch = useDispatch();
    let store = useSelector(
        (state: RootState) => state.data.store.result.stores[0]
    );
    let products = useSelector(
        (state: RootState) => state.data.products.results
    );

    const categories: Array<string> = [];

    products.map((product: { category: { name: string } }) => {
        let productName: string = product.category.name;
        if (!categories.includes(productName)) {
            categories.push(productName);
        }
        return null;
    });

    useEffect(() => {
        dispatch(actionsData.getStoreRequest());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout>
            <Grid
                container
                direction="column"
                alignItems="center"
                minHeight="100vh"
            >
                <Grid item style={{ padding: '0', width: '100%' }}>
                    <Card
                        sx={{
                            backgroundColor: 'primary.main',
                            display: 'flex',
                            direction: 'row',
                            padding: '2rem',
                        }}
                    >
                        <StoreIcon
                            fontSize="large"
                            sx={{
                                color: 'white',
                                mr: '2rem',
                            }}
                        />
                        <div>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 'bold',
                                    textAlign: 'left',
                                    color: 'white',
                                }}
                            >
                                {store.name}
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 'bold',
                                    textAlign: 'left',
                                    color: 'secondary.main',
                                }}
                            >
                                {store.availabilityState}
                            </Typography>
                        </div>
                    </Card>
                </Grid>
                <Grid item style={{ padding: '0', width: '100%' }}>
                    <TabMenu products={products} categories={categories} />
                </Grid>
            </Grid>
        </Layout>
    );
}
