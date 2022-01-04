import {
    Grid as MuiGrid,
    Typography,
} from '@mui/material';
import { spacing } from '@mui/system';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import Client from 'shopify-buy';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Grid = styled(MuiGrid)(spacing)


function ProductCategories() {
    const [products, setProducts] = useState([])
    const shopifyClient = useSelector(state => state.shopify.client)
    useEffect(() => {
        if (shopifyClient && !products.length) {
            // Fetch all products in your shop
            shopifyClient.product.fetchAll().then((data) => {
                // Do something with the products
    
                console.log('products', data)
                const products = []
                for (let i = 0; i < data.length; i++) {
                    const product = data[i];
                    if (product) {
                        products.push(product)
                    }
                }
                setProducts(products)
            });
        }
    }, [shopifyClient]) 
    return (<section className="px-5">
        <Grid container direction="column" alignItems="center">
            <Grid item xs alignItems="center">
                <h1 className="text-center mx-auto fw-bold" style={{ fontSize: '8em', marginTop: '1em', maxWidth: '80%', marginBottom: '0.5em' }}>
                    We help <br /> you make music
                </h1>
                <h3 className="text-center" style={{ marginBottom: '3.5em' }}>
                    Majic makes cutting edge software and gear for musicians so you can focus on being the creative.
                </h3>
            </Grid>
        </Grid>
        <Grid container spacing={10} mb={10}>
            {products.map(product => <Grid item xs={12} sm={6} key={product.id}>
                <Grid container direction="column" alignItems="center">
                    <h3 className="mb-2 fw-bold" style={{ maxWidth: '80%', fontSize: '3.5em' }}>{product.title}</h3>
                    <h5 className="mb-4" style={{ maxWidth: '80%' }}>{product.description}</h5>
                    <Image 
                        rounded
                        src={product.images[0].src}
                        width="90%"
                        className="strong-shadow"
                    />
                </Grid>
            </Grid>)}
        </Grid>
    </section>)
}
export default ProductCategories