import React from 'react'
import '../index.css'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Landing() {
    return (

        <>
            <div className='d-flex align-items-center justify-content-center flex-column first-section' >
                <h1 className='text-black text-center main-heading' ><span className='text-danger'>Tired</span> of <span className='text-primary'>Losing Connections</span>?<br /> We've Got You <span className='text-success'>Covered</span>.</h1>
                <Button variant="contained" style={{ backgroundColor: 'rgba(129, 99, 218, 1)', marginTop: '80px', padding: '15px' }}>Start creating new contacts</Button>

            </div>

            <hr />

            <div>
                <div className='d-flex justify-content-center align-items-center  flex-column mt-5'>
                    <h1 className='text-center '>About us</h1>
                    <div style={{ backgroundColor: 'rgba(129, 99, 218, 1)', height: '5px', width: '90px' }}></div>
                </div>



                <Box sx={{ flexGrow: 1 }} >
                    <Grid container spacing={12}>
                        <Grid size={1}>

                        </Grid>
                        <Grid size={5} className='d-flex align-items-center justify-content-center flex-column'>
                            <p className='my-5'>We believe in simplicity. Our goal is to provide a straightforward, reliable way to manage your contacts. No clutter, no unnecessary features—just a simple, powerful tool to help you keep track of the people who matter.</p>
                            <p>
                                Our app is designed to be intuitive. Easily add new contacts, quickly find who you're looking for, and keep your list clean by editing or deleting old entries. It's a digital address book built for today.
                            </p>
                        </Grid>
                        <Grid size={1}>

                        </Grid>
                        <Grid size={4}  className='d-flex align-items-center justify-content-center '>
                           <img src="https://t4.ftcdn.net/jpg/16/56/91/07/360_F_1656910701_b9Lt0quRPdCA4cNwb2fxaM94e4iWD8WU.jpg" alt="" width={600} />
                        </Grid>
                        <Grid size={1}>

                        </Grid>

                    </Grid>
                </Box>
            </div>

<div>
                <div className='d-flex justify-content-center align-items-center  flex-column mt-5'>
                    <h1 className='text-center ' style={{fontSize:'50px'}}>Start now</h1>
                    <div style={{ backgroundColor: 'rgba(129, 99, 218, 1)', height: '5px', width: '90px' }}></div>
                </div>



                <Box sx={{ flexGrow: 1 }} >
                    <Grid container spacing={12}>
                        <Grid size={1}>

                        </Grid>
                        <Grid size={5} className='d-flex align-items-center justify-content-center flex-column'>
                            <p className='my-5'>We believe in simplicity. Our goal is to provide a straightforward, reliable way to manage your contacts. No clutter, no unnecessary features—just a simple, powerful tool to help you keep track of the people who matter.</p>
                            <p>
                                Our app is designed to be intuitive. Easily add new contacts, quickly find who you're looking for, and keep your list clean by editing or deleting old entries. It's a digital address book built for today.
                            </p>
                        </Grid>
                        <Grid size={1}>

                        </Grid>
                        <Grid size={4}  className='d-flex align-items-center justify-content-center '>
                           <img src="https://t4.ftcdn.net/jpg/16/56/91/07/360_F_1656910701_b9Lt0quRPdCA4cNwb2fxaM94e4iWD8WU.jpg" alt="" width={600} />
                        </Grid>
                        <Grid size={1}>

                        </Grid>

                    </Grid>
                </Box>
            </div>
            

           
        </>


    )
}

export default Landing