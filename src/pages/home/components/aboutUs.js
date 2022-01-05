import {
    Grid as MuiGrid,
    Typography,
    Card,
    CardContent,
    Box,
    Divider as MuiDivider
} from '@mui/material';
import { spacing } from '@mui/system';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import MajicNavbar from './navbar';
import { Container } from 'react-bootstrap';

const Grid = styled(MuiGrid)(spacing)
const Divider = styled(MuiDivider)(spacing)

function AboutUs() {

    return (
        <>
            <MajicNavbar textColor="dark"/>
            <Divider my={3} />
            <Container className="align-items-center" fluid="sm" style={{ maxWidth: '576px'}}>
                <Box style={{ margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Image 
                        src='assets/images/Hooked-2.0-Notes-Kit.png'
                        width="90%"
                        className="shadow"
                    />
                </Box>
                <Typography className="my-4" align='center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
            </Container>
        </>
    )
}
export default AboutUs