import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import {
    Button as MuiButton,
    Grid as MuiGrid,
    FormControl,
    TextField,
    FormHelperText,
    InputAdornment,
    IconButton,
    Card,
    CardContent,
    Typography,
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { spacing } from '@mui/system';
import styled from 'styled-components'
import MajicNavbar from '../home/components/navbar';
import { useSelector } from 'react-redux';

const Grid = styled(MuiGrid)(spacing);
const Button = styled(MuiButton)(spacing);

function Login() {
    const navigate = useNavigate()
    const client = useSelector(state => state.shopify.client)
    const [state, setState] = useState({
        showPassword: false,
        email: '',
        password: '',
    })
    const handlePreventDefault = event => event.preventDefault()
    useEffect(() => {

    }, [])
    return (
        <>
            <MajicNavbar textColor="dark" />
            <Container className="align-items-center" fluid="sm" style={{ maxWidth: '576px'}}>
                <Card elevation={20} sx={{ marginTop: '10vh'}}>
                    <CardContent>
                        <h1 className="fw-bold">Log In</h1>
                        <Typography className="my-4">
                            Enter the email address associated with your Output account.
                            Don't have an account? Enter your info and click "new account", and we'll create one for you.
                        </Typography>
                        <Grid container mb={3}>
                            <Grid item sm>
                                <FormControl fullWidth>
                                    <TextField 
                                        variant="outlined"
                                        label="Email"
                                        placeholder="Email"
                                        required
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container mb={3}>
                            <Grid item sm>
                                <FormControl fullWidth>
                                    <TextField 
                                        variant="outlined"
                                        label="Password"
                                        placeholder="Passsword"
                                        type={state.showPassword ? 'text' : 'password'}
                                        required
                                        InputProps={{
                                            endAdornment: (<InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setState({ ...state, showPassword: !state.showPassword })}
                                                onMouseDown={handlePreventDefault}
                                                edge="end"
                                                >
                                                {state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>)
                                        }}
                                    />
                                </FormControl>
                                <FormHelperText>Must have at least 5 characters</FormHelperText>
                            </Grid>
                        </Grid>
                        <Grid container mb={2}>
                            <Grid item sm>
                                <Button color="primary" variant="contained" fullWidth onClick={() => navigate('/account')}>
                                    Log In
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container mb={2}>
                            <Grid item sm>
                                <Button color="primary" variant="outlined" fullWidth>
                                    Create Account
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}
export default Login;