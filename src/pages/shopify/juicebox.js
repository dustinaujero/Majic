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
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { spacing } from '@mui/system';
import { Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateCheckoutID } from '../../redux/actions/shopifyActions';

const Divider = styled(MuiDivider)(spacing);
const Grid = styled(MuiGrid)(spacing);
const Box = styled(MuiBox)(spacing);
const Typography = styled(MuiTypography)(spacing);
// Initializing a client to return content in the store's primary language
function JuiceboxPlugin() {
    const productID = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5MDYyMzAzNzQ0NDU='
    const [product, setProduct] = useState('')
    const client = useSelector(state => state.shopify.client)
    useEffect(() => {
        if (client && !product) {
            client.product.fetch(productID).then((product) => {
                // Do something with the product
                setProduct(product)
            });
        }
    }, [client])

    const navigate = useNavigate()
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
        console.log('product id', product.variants[0].id, product);
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
                            <Button variant="contained" onClick={addToCart}>
                                {status == 'available' && <Typography>
                                    Add to Cart
                                </Typography>}
                                {status == 'loading' && <Typography>
                                    <CircularProgress />
                                </Typography>}
                                {status == 'added' && <Typography>
                                    Added
                                </Typography>}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>}
        </Box>
    </>)

}

export default JuiceboxPlugin