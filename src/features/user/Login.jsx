import React, { useState } from 'react';
import {
    Container,
    Grid,
    Box,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    // Link,
    Button,
    Card,
    IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import './style/user.css';

function Login() {
    const [pageValue,setPageValue] = useState()
    const handleChange = (e) =>{
          console.log(e.target.value)
    }

    return (
        <Container className='login-section' maxWidth="mx">
            <div className='login-section'>
                <Grid container spacing={12}>
                    <Grid item xs={12} md={6} justifyContent="start">
                        <Card className='login-form' sx={{ background: 'none', boxShadow: 'none', fontFamily: 'pureblissPoppinsLight' }}>
                            <Typography variant="h5" sx={{ textAlign: 'start', fontWeight: 600, color: '#6B4028' }}>
                                Welcome Back!
                            </Typography>

                            <Typography variant="body1"
                                sx={{ textAlign: 'start', mb: 3, fontWeight: 600, fontFamily: 'pureblissPoppinsLight' }}>
                                Didn’t have an account ?
                                <Button className="nav-head" component={Link} to="/signup"> Sign up</Button>
                                {/* <Link href="signup" underline="none"
                                    sx={{
                                        color: '#151515',
                                        ml: 1,
                                        ontWeight: 600
                                    }}>Sign up</Link> */}
                                
                            </Typography>
                               
                            <Box component="form">
                                <TextField
                                    label="Username"
                                    variant="outlined"
                                    fullWidth
                                    onChange={(e)=> handleChange(e)}
                                    margin="normal"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#6B4028', // Custom border color
                                                border: '2px solid #6B4028',
                                                borderRadius: '10px'
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#6B4028', // Custom border color on hover
                                                border: '2px solid #6B4028'
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#6B4028', // Custom border color when focused
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#151515', // Custom label color
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: '#6B4028', // Custom label color when focused
                                        },
                                    }}
                                />

                                <TextField
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#6B4028', // Custom border color
                                                border: '2px solid #6B4028',
                                                borderRadius: '10px'
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#6B4028', // Custom border color on hover
                                                border: '2px solid #6B4028'
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#6B4028', // Custom border color when focused
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#151515', // Custom label color
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: '#6B4028', // Custom label color when focused
                                        },
                                    }}
                                />

                                <Link href="#" underline="none" sx={{ display: 'block', mt: 1, float: 'right', color: '#151515', fontWeight: 600 }}>
                                    Forgot Password?
                                </Link>

                                <FormControlLabel control={<Checkbox
                                    sx={{
                                        color: '#151515',
                                        '&.Mui-checked': {
                                            color: '#6B4028',
                                        },
                                    }}
                                />}
                                    label="Remember me"
                                    sx={{
                                        mt: 2,
                                        fontSize: '14px',
                                        '& .MuiFormControlLabel-label.Mui-focused': {
                                            fontWeight: 600,
                                            fontFamily: 'pureblissPoppinsLight',
                                        },
                                    }}
                                />

                                <Button variant="contained" color="primary" fullWidth
                                    sx={{
                                        mt: 2,
                                        backgroundColor: '#6B4028', // Custom background color
                                        color: 'white', // Custom text color
                                        padding: '15px',
                                        borderRadius: '10px',
                                        '&:hover': {
                                            backgroundColor: '#6B4028', // Custom hover background color
                                        },
                                        fontFamily: 'pureblissPoppinsLight',
                                        fontSize: '16px',
                                    }}>
                                    Log In
                                </Button>
                            </Box>
                        </Card>

                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                                <Typography variant="body2" sx={{ mr: 1, fontWeight: 600, fontFamily: 'pureblissPoppinsLight' }}>
                                    Or login with
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                                <IconButton color="primary">
                                    <img src="./icons/search.png" alt="google" />
                                </IconButton>
                                <IconButton color="primary">
                                    <img src="./icons/facebook.png" alt="facebook" />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} justifyContent="end">
                        <Box className="login-img">
                            <img src="../main-images/contact-img.jpg" alt="Leaf" />
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

export default Login;