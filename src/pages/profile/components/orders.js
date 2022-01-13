import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Navbar,
    Container,
    Row,
    Col,
    Nav,
    NavDropdown,
    Image,
    Button,
    Form,
} from 'react-bootstrap';
import { 
    TableContainer,
    Table, 
    TableHead,
    TableBody,
    TableRow as MuiTableRow,
    TableCell as MuiTableCell,
    Typography,
    Grid,   
    Divider as MuiDivider,
} from '@mui/material';
import styled from 'styled-components';
import { spacing } from '@mui/system';

const TableCell = styled(MuiTableCell)`
    border: 1px solid black;
`
const TableRow = styled(MuiTableRow)`
    border: 1px solid black;
`
const Divider = styled(MuiDivider)(spacing)
// import LogoSVG from '../../assets/images/outpout-logo-mobile.svg';

function Orders() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([])
    return (
        <section>
            <div className="d-flex flex-direction-row align-items-center">
                <h1>Orders</h1>
            </div>
            <Divider mb={4}/>
            <Grid container>
                <Grid item xs>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">
                                        <Typography>
                                            Order #
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography>
                                            Date
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography>
                                            Serial #
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell colSpan={3}>
                                        <Typography className="fw-bold">
                                            No orders found.
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </section>
    )
}
export default Orders;