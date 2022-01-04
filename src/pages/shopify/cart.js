import React from 'react'
import Client from 'shopify-buy';
import {
    Divider as MuiDivider,
    Grid as MuiGrid,
    IconButton,
    Typography as MuiTypography,
    Button as MuiButton,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { connect } from 'react-redux';
import { updateCheckoutID } from '../../redux/actions/shopifyActions';

import styled from 'styled-components';
import { spacing } from '@mui/system';

const Grid = styled(MuiGrid)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Typography = styled(MuiTypography)(spacing);
const Button = styled(MuiButton)(spacing);


class Cart extends React.Component {
    state = {
        lineItems: [],
        subtotal: '0',
        webURL: ''
    }
    componentDidMount() {
        const checkoutID = localStorage.getItem('checkoutID')
        console.log('checkoutid', checkoutID)
        if (checkoutID) {
            this.props.shopifyClient?.checkout.fetch(checkoutID).then((checkout) => {
                // Do something with the checkout
                console.log('old checkout', checkout);
                this.props.updateCheckoutID(checkout.id)
                this.setState({ 
                    lineItems: checkout.lineItems, 
                    subtotal: checkout.lineItemsSubtotalPrice.amount,
                    webURL: checkout.webUrl
                })
            });
        } else {
            this.props.shopifyClient?.checkout.create().then((checkout) => {
                // Do something with the checkout
                console.log('new checkout', checkout);
                this.props.updateCheckoutID(checkout.id)
                this.setState({ 
                    lineItems: checkout.lineItems, 
                    subtotal: checkout.lineItemsSubtotalPrice.amount,
                    webURL: checkout.webUrl
                })
            });

        }
    }
    removeItem = (lineItemID) => {
        const checkoutId = this.props.shopifyCheckoutID; // ID of an existing checkout
        const lineItemIdsToRemove = [ lineItemID ];
        console.log('remove item', checkoutId, lineItemIdsToRemove)
        // Remove an item from the checkout
        this.props.shopifyClient?.checkout.removeLineItems(checkoutId, lineItemIdsToRemove).then((checkout) => {
            // Do something with the updated checkout
            this.setState({ 
                lineItems: checkout.lineItems, 
                subtotal: checkout.lineItemsSubtotalPrice.amount,
                webURL: checkout.webUrl
            })
        });
    }
    formatPrice = () => parseFloat(this.state.subtotal).toFixed(2)
    render() {
        return (
            <Grid 
                container
                alignItems="start"
                className="px-3"
                mt={5}
                sx={{ 
                    minWidth: 300,
                    // maxWidth: 'calc(100vw - 10px)',
                    maxWidth: 400,
                }}
            >
                {!this.state.lineItems.length ? <>
                    <Grid item xs={12}>
                        <h3 className="fw-bold">
                            Your cart is empty.
                        </h3>
                    </Grid>
                    <Grid item xs={12}>
                        <a className="text-dark mt-5">
                            Let's fix that.
                        </a>
                    </Grid>
                </> : <>
                    {this.state.lineItems.map(product => <Grid item xs={12} key={product.id}>
                        <Divider my={2} />
                        <Grid container spacing={5}>
                            <Grid item xs>
                                <Typography>{product.title}</Typography>
                                <Typography>{product.variant.price}</Typography>
                            </Grid>
                            <Grid item>
                                <IconButton onClick={() => this.removeItem(product.id)}>
                                    <Delete />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>)}
                    <Grid item xs={12}>
                        <Divider my={2} />
                        <Typography className="fw-bold" variant="h6">Subtotal: ${this.formatPrice()}</Typography>
                        <Button fullWidth my={2} variant="contained" disabled={!this.state.webURL} onClick={() => window.location.href = this.state.webURL}>Checkout</Button>
                    </Grid>
                </>}
            </Grid>
        )
    }
}
const msp = state => ({
    shopifyClient: state.shopify.client,
    shopifyCheckoutID: state.shopify.checkoutID,
})
const mdp = dispatch => ({
    updateCheckoutID: (checkoutID) => dispatch(updateCheckoutID(checkoutID))
})
export default connect(msp, mdp)(Cart)