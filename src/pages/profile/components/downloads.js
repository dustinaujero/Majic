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
    Typography as MuiTypography,
    Grid,   
    Divider as MuiDivider,
} from '@mui/material';
import styled from 'styled-components';
import { spacing } from '@mui/system';
// import LogoSVG from '../../assets/images/outpout-logo-mobile.svg';

const Divider = styled(MuiDivider)(spacing)
const Typography = styled(MuiTypography)(spacing)

function Downloads() {
    const navigate = useNavigate();

    return (
        <section>
            <div className="d-flex flex-direction-row align-items-center">
                <h1>Downloads</h1>
            </div>
            <Divider mb={4}/>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <video 
                        autoPlay="autoplay" 
                        muted="muted" 
                        loop="loop" 
                        playsInline="" 
                        // src="assets/videos/juicebox-animation.mov" 
                        src="https://majicbucket.s3.amazonaws.com/juicebox-animation.mov" 
                        className="full-video strong-shadow" 
                        style={{ objectPosition: '50% 50%', display: 'block', borderRadius: '8px', border: '1px solid gray' }}
                    ></video>
                    <Typography variant="h5" className="text-decoration-underline fw-bold" align="center" mt={2}>
                        Download Juicebox
                    </Typography>
                </Grid>
                <Grid item>
                    
                </Grid>
            </Grid>
        </section>
    )
}
export default Downloads;