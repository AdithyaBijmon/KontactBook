import React from 'react'
import '../index.css'
import Button from '@mui/material/Button';

function Landing() {
    return (
            
                <div className='d-flex align-items-center justify-content-center flex-column'>
                    <h1 className='text-black text-center' style={{fontSize:'90px',marginTop:'200px'}}><span className='text-danger'>Tired</span> of <span className='text-primary'>Losing Connections</span>?<br /> We've Got You <span className='text-success'>Covered</span>.</h1>
                       <Button variant="contained" style={{backgroundColor:'rgb(81, 33, 225)',marginTop:'80px'}}>Start creating your new connections</Button>
                </div>
           
        
    )
}

export default Landing