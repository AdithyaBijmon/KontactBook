import React from 'react'
import '../index.css'
import Button from '@mui/material/Button';

function Landing() {
    return (
            
        <div className='d-flex align-items-center justify-content-center flex-column'>
            <h1 className='text-black text-center' style={{fontSize:'90px',marginTop:'200px'}}><span className='text-danger'>Tired</span> of <span className='text-primary'>Losing Connections</span>?<br /> We've Got You <span className='text-success'>Covered</span>.</h1>
            <Button variant="contained" style={{backgroundColor:'rgba(129, 99, 218, 1)',marginTop:'80px',padding:'10px'}}>Start creating new contacts</Button>
        </div>
           
        
    )
}

export default Landing