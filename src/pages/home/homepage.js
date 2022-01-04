import React from 'react';
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Image
} from 'react-bootstrap';
// import LogoSVG from '../../assets/images/outpout-logo-mobile.svg';
import MajicNavbar from './components/navbar';
import LandingVideoSection from './components/landingVideo';
import JuiceboxVideoSection from './components/juiceboxVideo';
import ProductCategories from './components/productCategories';
import Footer from './components/footer';

function Homepage() {
    return (
        <>
        <MajicNavbar />
        <main>
            <LandingVideoSection />

            <JuiceboxVideoSection />

            <ProductCategories />


        </main>
        <Footer />

        </>
    )
}
export default Homepage;