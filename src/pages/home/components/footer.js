import {
    Divider as MuiDivider,
    Grid as MuiGrid, 
    Link, 
    List, 
    ListItem,
    ListSubheader as MuiListSubheader,
} from '@mui/material';
import { spacing } from '@mui/system';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Divider = styled(MuiDivider)(spacing);
const Grid = styled(MuiGrid)(spacing);
const ListSubheader = styled(MuiListSubheader)(spacing);

function Footer() {
    const navigate = useNavigate()
    return (
        <footer>
            {/* <Grid container spacing={10}>
                <Grid item xs={12} sm={4}>
                    <List>
                        <ListItem>
                            <h2 className="fw-bold">Try Arcade Free</h2>
                        </ListItem>
                        <ListItem>
                            <h2 className="fw-bold">Get To Know Us</h2>
                        </ListItem>
                        <ListItem>
                            <h2 className="fw-bold">Output Blog</h2>
                        </ListItem>
                        <ListItem>
                            <h2 className="fw-bold">Careers</h2>
                        </ListItem>
                        <ListItem>
                            <h2 className="fw-bold">Get Help</h2>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <List>
                        <ListSubheader my={3}>
                            <h4 className="fw-bold">Arcade (Try It Free)</h4>
                        </ListSubheader>
                        <ListSubheader my={3}>
                            <h4 className="fw-bold">Instruments</h4>
                        </ListSubheader>
                        <ListItem>
                            <h6>Analog Brass & Winds</h6>
                        </ListItem>
                        <ListItem>
                            <h6>Analog Strings</h6>
                        </ListItem>
                        <ListSubheader my={3}>
                            <h4 className="fw-bold">Bundle (Save 65%)</h4>
                        </ListSubheader>
                    </List>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <List>
                        <ListSubheader my={3}>
                            <h4 className="fw-bold">FX</h4>
                        </ListSubheader>
                        <ListItem>
                            <h6>Movements</h6>
                        </ListItem>
                        <ListItem>
                            <h6>Portal</h6>
                        </ListItem>
                        <ListItem>
                            <h6>Thermal</h6>
                        </ListItem>
                        <ListSubheader my={3}>
                            <h4 className="fw-bold">Studio Gear</h4>
                        </ListSubheader>
                        <ListItem>
                            <h6>Sidecar</h6>
                        </ListItem>
                        <ListItem>
                            <h6>Stands</h6>
                        </ListItem>
                        <ListItem>
                            <h6>Platform</h6>
                        </ListItem>
                        <ListSubheader my={3}>
                            <h4 className="fw-bold">Speakers</h4>
                        </ListSubheader>
                    </List>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <List>
                        <ListSubheader my={3}>
                            <h4 className="fw-bold">Refer Friends, Get Extra Month</h4>
                        </ListSubheader>
                        <ListItem>
                            <h6>Returns</h6>
                        </ListItem>
                        <ListItem>
                            <h6>Shipping</h6>
                        </ListItem>
                        <ListItem>

                        </ListItem>
                        <ListItem>
                            <h6>Privacy Policy</h6>
                        </ListItem>
                        <ListItem>
                            <h6>Accessibility Statement</h6>
                        </ListItem>
                        <ListItem>
                            <h6>Terms of Service</h6>
                        </ListItem>
                    </List>
                </Grid>
            </Grid> */}
            <Divider my={3}/>
            <Grid container mb={3} px={3} spacing={10} alignItems="center" justifyContent="space-between">
                <Grid item>
                    @2021 Majic. All rights reserved.
                </Grid>
                <Grid item>
                    <Link onClick={() => navigate('/termsOfService')}>Terms of Service</Link>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;