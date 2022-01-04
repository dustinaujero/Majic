import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
    Table,
    TableContainer,
    TableBody,
    TableRow,
    TableCell,
    Typography,
    Grid
} from '@mui/material'
// import LogoSVG from '../../assets/images/outpout-logo-mobile.svg';

function Subscriptions() {
    const navigate = useNavigate();

    return (
        <section>
            <div className="d-flex flex-direction-row align-items-center mb-5">
                <h1>Arcade (Monthly)</h1>
            </div>
            <Grid container>
                <Grid item sm={6} className="border border-dark px-4 py-3 border-bottom-0 border-end-0">
                    <Typography className="fw-bold">
                        Status
                    </Typography>
                </Grid>
                <Grid item sm={6} className="border border-dark px-4 py-3 border-bottom-0 ">
                    <Typography>
                        Expired
                    </Typography>
                </Grid>
            </Grid>
            
            <Grid container>
                <Grid item sm={6} className="border border-dark px-4 py-3 border-bottom-0 border-end-0">
                    <Typography className="fw-bold">
                        Start Date
                    </Typography>
                </Grid>
                <Grid item sm={6} className="border border-dark px-4 py-3 border-bottom-0">
                    <Typography>
                        March 5, 2019
                    </Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item sm={6} className="border border-dark px-4 py-3 border-bottom-0 border-end-0">
                    <Typography className="fw-bold">
                        End Date
                    </Typography>
                </Grid>
                <Grid item sm={6} className="border border-dark px-4 py-3 border-bottom-0">
                    <Typography>
                        December 20, 2020
                    </Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item sm={6} className="border border-dark px-4 py-3 border-end-0">
                    <Typography className="fw-bold">
                        Actions
                    </Typography>
                </Grid>
                <Grid item sm={6} className="border border-dark px-4 py-3 ">
                    <Typography className="fw-bold text-decoration-underline">
                        Sign Up Again
                    </Typography>
                </Grid>
            </Grid>

        </section>
    )
}
export default Subscriptions;