import {
    Grid as MuiGrid,
    Typography,
    FormControl,
    TextField,
    Divider as MuiDivider,
    Button
} from '@mui/material';
import { spacing } from '@mui/system';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import { useState } from 'react';
import MajicNavbar from './navbar';

const Grid = styled(MuiGrid)(spacing);
const Divider = styled(MuiDivider)(spacing);

function ContactUs() {
    const [contactInfo, setContactInfo] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        description: ''
    })
    const submitForm = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <MajicNavbar noText />
            <Divider my={3}/>
            <Grid container direction="column" alignItems="center" spacing={5} style={{ maxWidth: '700px'}} mx="auto">
                <Grid item xs={12}>
                    <Typography align='center' variant="h5" className="fw-bold">CONTACT OUR TEAM</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Please use the email address and full name associated with your order (or include the order # in your message if applicable) so we can best assist you.</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>We try to answer every message same day but please allow up to 48 hours for a response back from one of our team members. Thank you!</Typography>
                </Grid>
                <Grid item xs={12}>
                    <form onSubmit={submitForm}>
                        <Grid container spacing={5}>
                            <Grid item xs={6} pt={2}>
                                <FormControl fullWidth>
                                    <TextField 
                                        value={contactInfo.firstName}
                                        autoComplete='name'
                                        onChange={e => setContactInfo({ ...contactInfo, firstName: e.target.value })}
                                        variant="outlined"
                                        label="First Name"
                                        fullWidth
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} pt={2}>
                                <FormControl fullWidth>
                                    <TextField 
                                        value={contactInfo.lastName}
                                        autoComplete='family-name'
                                        onChange={e => setContactInfo({ ...contactInfo, lastName: e.target.value })}
                                        variant="outlined"
                                        label="Last Name"
                                        fullWidth
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} pt={2}>
                                <FormControl fullWidth>
                                    <TextField 
                                        value={contactInfo.phone}
                                        autoComplete='tel'
                                        onChange={e => setContactInfo({ ...contactInfo, phone: e.target.value })}
                                        variant="outlined"
                                        label="Phone"
                                        fullWidth
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} pt={2}>
                                <FormControl fullWidth>
                                    <TextField 
                                        value={contactInfo.description}
                                        onChange={e => setContactInfo({ ...contactInfo, description: e.target.value })}
                                        variant="outlined"
                                        multiline
                                        label="Description"
                                        fullWidth
                                    />
                                </FormControl>   
                            </Grid>
                            <Grid item xs={12} pt={2}>
                                <Button type="submit" variant="contained">
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}
export default ContactUs