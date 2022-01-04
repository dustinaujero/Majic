import React, { useEffect, useState } from 'react'
import Client from 'shopify-buy';
import { connect, useSelector } from 'react-redux';
import {
    Grid as MuiGrid,
    Typography as MuiTypography,
    TextField,
    FormControl,
    Divider as MuiDivider,
    Box as MuiBox,
    CircularProgress,
    Button,
} from '@mui/material';
import ProductTile from './productComponents/productTile';
import MajicNavbar from '../home/components/navbar';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { spacing } from '@mui/system';
import { Image } from 'react-bootstrap';

const Divider = styled(MuiDivider)(spacing);
const Grid = styled(MuiGrid)(spacing);
const Box = styled(MuiBox)(spacing);
const Typography = styled(MuiTypography)(spacing);
// Initializing a client to return content in the store's primary language
function ProductDetails() {
    const [product, setProduct] = useState('')
    const params = useParams()
    const client = useSelector(state => state.shopify.client)
    useEffect(() => {
        client?.product.fetch(params.productID).then(data => {
            console.log('product details', data)
            setProduct(data)
        })
    }, [params])

    return (<>
        <MajicNavbar textColor='dark' />
        <Divider my={3}/>
        <Box p={5}>
            {!product ? <Grid container spacing={5} alignItems='center' justifyContent="center">
                <Grid item>
                    <CircularProgress />
                </Grid>
            </Grid> : <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>
                            <Image 
                                rounded
                                src={product.images[0].src}
                                width="90%"
                                className="strong-shadow"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h3" className="fw-bold">{product.title}</Typography>
                            <Typography my={2}>{product.description}</Typography>
                            <Typography my={2} variant="body2">${product.variants[0].price}</Typography>
                            <Button variant="contained">Add to Cart</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>}
        </Box>
    </>)

}

export default ProductDetails