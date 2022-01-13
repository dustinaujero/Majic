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
    Form,
} from 'react-bootstrap';

import { 
    Button as MuiButton,
    Grid,
    FormControl,
    TextField,
    Divider as MuiDivider,
 } from '@mui/material';
import { spacing } from '@mui/system';
import styled from 'styled-components';

const Button = styled(MuiButton)(spacing)
const Divider = styled(MuiDivider)(spacing)

function Account() {
    const navigate = useNavigate()


    return (
        <section>
            <div className="d-flex flex-direction-row align-items-center">
                <h1>Daniel Majic</h1>
                <Button 
                    variant="outlined"
                    color="primary"
                    className="rounded-pill ml-1 px-3" 
                    onClick={() => navigate('/login')}
                    ml={3}
                >
                    Log Out
                </Button>
            </div>
            <Divider mb={4}/>
            <Form>
                <Container className="px-0">
                    <Row >
                        <Col>
                            <Form.Group className="mb-3" controlId="form-firstName">
                                <Form.Label className="fw-bold">First Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    required
                                    className="bg-transparent border-1 border-dark"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="form-lastName">
                                <Form.Label className="fw-bold">Last Name</Form.Label>
                                <Form.Control 
                                    type="text"     
                                    required
                                    className="bg-transparent border-1 border-dark"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
                <Container className="px-0">
                    <Row >
                        <Col>
                            <Form.Group className="mb-3" controlId="form-email">
                                <Form.Label className="fw-bold">Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    className="bg-transparent border-1 border-dark"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>

                <h4 className="mt-5 fw-bold">Change Password</h4>

                <Container className="px-0">
                    <Row >
                        <Col>
                            <Form.Group className="mb-3" controlId="form-currentPassword">
                                <Form.Label className="fw-bold">Current Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    className="bg-transparent border-1 border-dark" 
                                />
                                <Form.Text className="text-muted">
                                    Leave blank if unchanged.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
                <Container className="px-0">
                    <Row >
                        <Col>
                            <Form.Group className="mb-3" controlId="form-newPassword">
                                <Form.Label className="fw-bold">New Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    className="bg-transparent border-1 border-dark"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
                <Container className="px-0">
                    <Row >
                        <Col>
                            <Form.Group className="mb-3" controlId="form-confirmPassword">
                                <Form.Label className="fw-bold">Confirm Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    className="bg-transparent border-1 border-dark"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col className="d-flex flex-direction-row justify-content-end px-0">
                            <Button 
                                color="primary"
                                variant="contained"
                                type="submit" 
                                className="rounded-pill px-3"
                            >
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </section>
    )
}
export default Account;