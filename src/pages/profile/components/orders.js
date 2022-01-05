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
// import LogoSVG from '../../assets/images/outpout-logo-mobile.svg';

function Orders() {
    const navigate = useNavigate();

    return (
        <section>
            <div className="d-flex flex-direction-row align-items-center">
                <h1>Orders</h1>
            </div>

        </section>
    )
}
export default Orders;