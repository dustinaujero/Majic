import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
    Table,
    TableContainer,
    TableBody,
    TableRow,
    TableCell,
    Typography
} from '@mui/material'
// import LogoSVG from '../../assets/images/outpout-logo-mobile.svg';

function Arcade() {
    const navigate = useNavigate();

    return (
        <section>
            <div className="d-flex flex-direction-row align-items-center">
                <h1>Arcade (Monthly)</h1>
            </div>
            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">
                                <Typography className="fw-bold">
                                    Status
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography>
                                    Expired
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </section>
    )
}
export default Arcade;