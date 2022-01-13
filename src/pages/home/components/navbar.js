import React, { useState } from 'react';
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Image
} from 'react-bootstrap';
import { 
    IconButton,
    SwipeableDrawer, 
    Typography,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Close, ShoppingBag } from '@mui/icons-material';
import Cart from '../../shopify/cart';

function MajicNavbar({ textColor = 'light', noText = false }) {
    const navigate = useNavigate()
    const [openDrawer, setOpenDrawer] = useState('')
    const closeDrawer = () => setOpenDrawer('')
    return (
        <header className="d-flex justify-content-center flex-row mt-2 align-items-center" style={{ zIndex: 10 }}>
            {!noText && <Navbar className="d-flex flex-grow-1 justify-content-start ml-2" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link onClick={() => setOpenDrawer('shop')} className={`text-${textColor} smooth hover-underline`}>Shop</Nav.Link>
                        <Nav.Link onClick={() => navigate('/aboutUs')} className={`text-${textColor} smooth hover-underline`}>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>}
            {/* <div onClick={() => navigate('/')}>
                <Image rounded src="assets/images/output-logo-mobile.svg" style={{ width: '60px', height: '60px' }} className="text-light" />
            </div> */}
            <h1 onClick={() => navigate('/')} className={`text-${textColor} m-0 p-0`}>
                <Image 
                    src='assets/images/Juicebox-Logo-wht-hires.png'
                    style={{ 
                        maxWidth: '3em',
                        filter: textColor === 'dark' ? 'invert(100%)' : ''
                    }}
                />
            </h1>
            {!noText && <Navbar className="d-flex flex-grow-1 justify-content-end mr-2" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav " className="justify-content-end"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/login" className={`text-${textColor} smooth hover-underline`}>Login</Nav.Link>
                        <Nav.Link onClick={() => setOpenDrawer('cart')} className={`text-${textColor} smooth hover-underline`}>Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>}
            <SwipeableDrawer
                open={openDrawer === 'shop' || openDrawer === 'learn'}
                onOpen={() => {}}
                anchor="left"
                onClose={closeDrawer}
                disableBackdropTransition
                disableSwipeToOpen
            >
                <Grid 
                    container 
                    alignItems="center"
                    sx={{ 
                        minWidth: 400,
                        maxWidth: 'calc(100vw - 10px)'
                    }}
                    mb={8}
                >
                    <Grid item xs className="px-3">
                        <Navbar className="d-flex justify-content-start" expand="lg">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav>
                                    <Nav.Link onClick={() => setOpenDrawer('shop')} className={`text-dark smooth hover-underline ${openDrawer === 'shop' ? 'text-decoration-underline' : ''}`}>Shop</Nav.Link>
                                    {/* <Nav.Link onClick={() => navigate('/aboutUs')} className={`text-dark smooth hover-underline ${openDrawer === 'learn' ? 'text-decoration-underline' : ''}`}>Learn</Nav.Link> */}
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Grid>
                    <Grid item className="px-3">
                        <IconButton onClick={closeDrawer}>
                            <Close />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container spacing={10}>
                    <Grid item xs>
                        {openDrawer === 'shop' && <List className={`animate__animated ${openDrawer === 'learn' ? 'animate__fadeOutLeft' : ''}`}>
                            <ListItem button >
                                <ListItemText className="animate__animated animate__fadeInLeft">
                                    <h2 className="fw-bold" onClick={() => navigate('/juicebox')}>Juicebox</h2>
                                </ListItemText>
                            </ListItem>
                            <ListItem button >
                                <ListItemText className="animate__animated animate__fadeInLeft">
                                    <h2 className="fw-bold" onClick={() => navigate('/products')}>Preset Packs</h2>
                                </ListItemText>
                            </ListItem>
                            {/* <ListItem button >
                                <ListItemText className="animate__animated animate__fadeInLeft animate__delay-1s">
                                    <h2 className="fw-bold">Studio Gear</h2>
                                </ListItemText>
                                <ListItemIcon className="animate__animated animate__fadeIn animate__delay-3s">
                                    <ChevronRight />
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button >
                                <ListItemText className="animate__animated animate__fadeInLeft animate__delay-2s">
                                    <h2 className="fw-bold">Instruments</h2>
                                </ListItemText>
                                <ListItemIcon className="animate__animated animate__fadeIn animate__delay-3s">
                                    <ChevronRight />
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button >
                                <ListItemText className="animate__animated animate__fadeInLeft animate__delay-3s">
                                    <h2 className="fw-bold">Effects</h2>
                                </ListItemText>
                                <ListItemIcon className="animate__animated animate__fadeIn animate__delay-3s">
                                    <ChevronRight />
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button >
                                <ListItemText className="animate__animated animate__fadeInLeft animate__delay-4s">
                                    <h2 className="fw-bold">Frontier Speakers</h2>
                                </ListItemText>
                            </ListItem> */}
                        </List>}
                    </Grid>
                </Grid>
            </SwipeableDrawer>
            <SwipeableDrawer
                open={openDrawer === 'cart'}
                onOpen={() => {}}
                anchor="right"
                onClose={closeDrawer}
                disableBackdropTransition
                disableSwipeToOpen
            >
                <Grid 
                    container 
                    alignItems="center"
                    sx={{ 
                        minWidth: 300,
                        // maxWidth: 'calc(100vw - 10px)',
                        maxWidth: 400,
                    }}
                >
                    <Grid item xs className="px-3 mt-3">
                        <IconButton onClick={closeDrawer} size="small">
                            <Close />
                        </IconButton>
                    </Grid>
                    <Grid item className="px-3 mt-3">
                        <IconButton onClick={closeDrawer} size="small">
                            <ShoppingBag />
                        </IconButton>
                    </Grid>
                </Grid>
                <Cart />
            </SwipeableDrawer>
        </header>
    )
}
export default MajicNavbar;