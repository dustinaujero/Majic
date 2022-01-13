import {
    Grid as MuiGrid,
    Typography,
} from '@mui/material';
import { spacing } from '@mui/system';
import styled from 'styled-components';

const Grid = styled(MuiGrid)(spacing);

function JuiceboxVideoSection() {
    return (
        <section style={{ height: '80vh' }}>
            <Grid container alignItems="center" justifyContent="center" direction="column" my={3} style={{ height: '100%' }}>
                <Grid item>
                    <video 
                        autoPlay="autoplay" 
                        muted="muted" 
                        loop="loop" 
                        playsInline="" 
                        // src="assets/videos/juicebox-animation.mov" 
                        src="https://majicbucket.s3.amazonaws.com/juicebox-animation.mov" 
                        className="full-video strong-shadow" 
                        style={{ objectPosition: '50% 50%', display: 'block' }}
                    ></video>
                </Grid>
            </Grid>
        </section>
    )
}
export default JuiceboxVideoSection;