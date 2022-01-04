import React, { useState } from 'react';
import { useNavigate } from 'react-router';
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

function Downloads() {
    const navigate = useNavigate();

    return (
        <section>
            <div className="d-flex flex-direction-row align-items-center">
                <h1>Downloads</h1>
            </div>

        </section>
    )
}
export default Downloads;