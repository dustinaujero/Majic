import React, { useEffect, useState } from 'react'

import { connect, useDispatch, useSelector } from 'react-redux';
import {
    Grid,
    Typography,
    TextField,
    Card,
    CardContent,
    CardMedia,
    Button as MuiButton,
    CardActions,
    CircularProgress
} from '@mui/material';
import { Image } from 'react-bootstrap';
import { updateCheckoutID } from '../../../redux/actions/shopifyActions';

import styled from 'styled-components';
import { spacing } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const Button = styled(MuiButton)(spacing)

const ProductTile = ({ product }) => {
    const navigate = useNavigate()
    const client = useSelector(state => state.shopify.client)
    const checkoutID = useSelector(state => state.shopify.checkoutID)
    const [status, setStatus] = useState('available')

    const checkCartForProduct = (items) => {
        let found = false
        items.forEach(item => {
            if (item.variant.id == product.variants[0].id) {
                found = true
            }
        })
        console.log('found', found, product.title)
        setStatus(found ? 'added' : 'available')
    }

    useEffect(() => {
        if (!checkoutID) {
            client.checkout.create().then((checkout) => {

                console.log('checking checkout for product', checkout);
                dispatch(updateCheckoutID(checkout.id))
                checkCartForProduct(checkout.lineItems)
            });
        } else {
            client.checkout.fetch(checkoutID).then((checkout) => {
                // Do something with the updated checkout
                checkCartForProduct(checkout.lineItems)
            });
        }
    }, [])

    const dispatch = useDispatch()

    const addToCart = () => {
        setStatus('loading')
        console.log('product id', product.variants[0].id);
        console.log('checkout id', checkoutID);
        
        if (!checkoutID) {
            client.checkout.create().then((checkout) => {

                console.log('new checkout', checkout);
                dispatch(updateCheckoutID(checkout.id))

                const lineItemsToAdd = [{
                    variantId: product.variants[0].id,
                    quantity: 1,
                }];
                client.checkout.addLineItems(checkout.id, lineItemsToAdd).then((checkout) => {
                    // Do something with the updated checkout
                    console.log('add product', checkout); // Array with one additional line item
                    checkCartForProduct(checkout.lineItems)
                });
            });
        } else {
            const lineItemsToAdd = [{
                variantId: product.variants[0].id,
                quantity: 1,
            }];
            client.checkout.addLineItems(checkoutID, lineItemsToAdd).then((checkout) => {
                // Do something with the updated checkout
                console.log('add product', checkout); // Array with one additional line item
                checkCartForProduct(checkout.lineItems)
            });
        }
        
    }

    return (
        <Card>
            <CardMedia 
                component='img'
                height='160'
                image={product.images[0].src}
                alt="image"
                onClick={() => navigate(`/productDetails/${product.id}`)}
            />
            <CardContent onClick={() => navigate(`/productDetails/${product.id}`)}>
                <Typography>{product.title}</Typography>
                <Typography variant='h6'>${product.variants[0].price || ''}</Typography>
                {/* <Typography>{product.description}</Typography> */}
            </CardContent>
            <CardActions>
                <Button color="primary" variant="contained" fullWidth disabled={!product.variants[0]} onClick={addToCart}>
                    {status == 'available' && <Typography>
                        Add to Cart
                    </Typography>}
                    {status == 'loading' && <CircularProgress />}
                    {status == 'added' && <Typography>Added</Typography>}
                </Button>
            </CardActions>
        </Card>
        // <Grid container direction="column" alignItems="center">
        //     <h1 className="mb-2 fw-bold" style={{ fontSize: '3.5em' }}>{product.title}</h1>
        //     <h4 className="mb-4">{product.description}</h4>
        //     <Image 
        //         rounded
        //         src={product.images[0].src}
        //         width="90%"
        //         className="strong-shadow"
        //     />
        // </Grid>
    )
}
export default ProductTile