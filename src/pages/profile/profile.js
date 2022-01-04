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
import { 
    Account,
    Arcade,
    Downloads,
    Orders,
    Referrals,
    Subscriptions
} from './components';
import { 
    Divider as MuiDivider
} from '@mui/material';
import MajicNavbar from '../home/components/navbar';
import { spacing } from '@mui/system';
import styled from 'styled-components'

const Divider = styled(MuiDivider)(spacing)

// import LogoSVG from '../../assets/images/outpout-logo-mobile.svg';

function Login() {
    const navigate = useNavigate()

    const [activePage, setActivePage] = useState('account')

    return (<>
        <MajicNavbar noText />
        <Divider my={5}/>
        <Container className="align-items-center" fluid="sm" style={{ maxWidth: '992px'}}>



            <Navbar expand="lg" className="mb-5">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link 
                            className={`text-dark fw-bold smooth hover-underline ${activePage === 'account' ? 'text-decoration-underline' : ''}`}
                            onClick={() => setActivePage('account')}
                        >Account</Nav.Link>
                        <Nav.Link 
                            className={`text-dark fw-bold smooth hover-underline ${activePage === 'subscriptions' ? 'text-decoration-underline' : ''}`}
                            onClick={() => setActivePage('subscriptions')}
                        >Subscriptions</Nav.Link>
                        <Nav.Link 
                            className={`text-dark fw-bold smooth hover-underline ${activePage === 'arcade' ? 'text-decoration-underline' : ''}`}
                            onClick={() => setActivePage('arcade')}
                        >Arcade</Nav.Link>
                        <Nav.Link 
                            className={`text-dark fw-bold smooth hover-underline ${activePage === 'orders' ? 'text-decoration-underline' : ''}`}
                            onClick={() => setActivePage('orders')}
                        >Orders</Nav.Link>
                        <Nav.Link 
                            className={`text-dark fw-bold smooth hover-underline ${activePage === 'downloads' ? 'text-decoration-underline' : ''}`}
                            onClick={() => setActivePage('downloads')}
                        >Downloads</Nav.Link>
                        <Nav.Link 
                            className={`text-dark fw-bold smooth hover-underline ${activePage === 'referrals' ? 'text-decoration-underline' : ''}`}
                            onClick={() => setActivePage('referrals')}
                        >Referrals</Nav.Link>
                        <Nav.Link 
                            className={`text-dark fw-bold smooth hover-underline ${activePage === 'logout' ? 'text-decoration-underline' : ''}`}
                            onClick={() => navigate('/login')}
                        >Log Out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <main className="container-sm">
                {activePage === 'account' && <Account />}
                {activePage === 'subscriptions' && <Subscriptions />}
                {activePage === 'arcade' && <Arcade />}
                {activePage === 'orders' && <Orders />}
                {activePage === 'downloads' && <Downloads />}
                {activePage === 'referrals' && <Referrals />}
            </main>

        </Container></>
    )
}
export default Login;