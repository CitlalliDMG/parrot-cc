import { ReactNode, useState, SyntheticEvent } from 'react';
import { Tabs, Tab, Typography, Box, Card, Grid } from '@mui/material';

interface TabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
    category: string;
    products: Array<any>;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, products, category, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Grid
                    container
                    justifyContent="center"
                    minHeight="100vh"
                    spacing={2}
                    paddingTop={'2rem'}
                >
                    {products.map((product: any, index: number) => {
                        if (product.category.name === category) {
                            return (
                                <Grid key={index} item>
                                    <Card
                                        sx={{
                                            backgroundColor: 'primary.main',
                                            display: 'flex',
                                            direction: 'row',
                                            padding: '2rem',
                                            maxWidth: '500px',
                                            // heigth: '320px',
                                        }}
                                    >
                                        <span>
                                            <img
                                                src={product.imageUrl}
                                                alt={product.name}
                                                loading="lazy"
                                                width="160px"
                                                height="160px"
                                            />
                                        </span>
                                        <Box sx={{ ml: '2rem' }}>
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    textAlign: 'left',
                                                    color: 'white',
                                                    mb: '1rem',
                                                }}
                                            >
                                                {product.name}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    textAlign: 'left',
                                                    color: 'primary.light',
                                                    fontSize: '1rem',
                                                }}
                                            >
                                                {product.description}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    textAlign: 'left',
                                                    color: 'white',
                                                    fontSize: '1rem',
                                                }}
                                            >
                                                ${product.price}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    textAlign: 'left',
                                                    color: 'secondary.main',
                                                    fontSize: '1rem',
                                                }}
                                            >
                                                {product.availability}
                                            </Typography>
                                        </Box>
                                    </Card>
                                </Grid>
                            );
                        }
                    })}
                </Grid>
            )}
        </div>
    );
}

function a11yProps(index: string) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ products, categories }: any) {
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    {categories.map((category: any, index: number) => {
                        const key: string = `${index}-cat`;
                        return <Tab label={category} {...a11yProps(key)} />;
                    })}
                </Tabs>
            </Box>
            {categories.map((category: any, index: number) => (
                <TabPanel
                    value={value}
                    index={index}
                    products={products}
                    category={category}
                />
            ))}
        </Box>
    );
}
