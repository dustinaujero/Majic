import React from 'react'
import Client from 'shopify-buy';
import { connect } from 'react-redux';
import {
    Grid as MuiGrid,
    Typography,
    TextField,
    FormControl,
    Divider as MuiDivider,
    Box as MuiBox,
} from '@mui/material';
import ProductTile from './productComponents/productTile';
import MajicNavbar from '../home/components/navbar';

import styled from 'styled-components';
import { spacing } from '@mui/system';

const Divider = styled(MuiDivider)(spacing);
const Grid = styled(MuiGrid)(spacing);
const Box = styled(MuiBox)(spacing);
// Initializing a client to return content in the store's primary language
class Products extends React.Component {
    state = {
        allProducts: [],
        products: [],
        searchProducts: ''
    }
    componentDidMount() {
        this.props.shopifyClient?.product.fetchAll().then((data) => {
            // Do something with the products

            console.log('products', data)
            const products = []
            for (let i = 0; i < data.length; i++) {
                const product = data[i];
                if (product) {
                    products.push(product)
                }
            }
            this.setState({
                products,
                allProducts: products
            })
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchProducts !== this.state.searchProducts) {
            this.filterProducts()
        }
    }
    filterProducts = () => {
        const products = [...this.state.allProducts]
        const filteredProducts = products.filter(product => {
            const title = product.title.toLowerCase();
            const description = product.description.toLowerCase();
            const query = this.state.searchProducts.toLowerCase();
            return (
                title.includes(query) || description.includes(query)
            )
        })
        this.setState({
            products: filteredProducts
        })
    }
    render() {
        return (<>
            <MajicNavbar textColor='dark' />
            <Divider my={3}/>
            <Box p={5}>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <TextField 
                                variant="outlined"
                                fullWidth
                                label={'Search Products'}
                                value={this.state.searchProducts}
                                onChange={e => this.setState({ searchProducts: e.target.value})}
                                className="bg-light"
                                style={{ borderRadius: '4px' }}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={5}>
                            <Grid item xs={3}>
                                <Grid container spacing={5}>
                                    <Grid item xs={12}>
                                        <Divider />
                                        <Typography>Filters</Typography>
                                        <Divider />
                                        <Typography>Price</Typography>
                                        {/* <TextField 
                                        
                                        /> */}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={9}>
                                <Box>
                                <Grid container spacing={5}>
                                    {this.state.products.map(product => <Grid key={product.id} item xs={12} sm={6} md={3}>
                                        {/* <Grid item xs> */}
                                            <ProductTile product={product} />
                                        {/* </Grid> */}
                                    </Grid>)}
                                </Grid>

                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>)
    }
}
const msp = state => ({
    shopifyClient: state.shopify.client,
    shopifyCheckout: state.shopify.checkout
})
const mdp = dispatch => ({

})
export default connect(msp, mdp)(Products)