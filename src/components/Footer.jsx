import { red } from '@mui/material/colors'
import React from 'react'

function Footer() {
  return (
    <div style={{backgroundColor:'rgba(129, 99, 218, 1)',width:'100%',height:'150px'}} className='text-light py-5'>

    <div className='text-center'>
        <p>© 2025 <span className='fw-bold'>Kontact</span>. All Rights Reserved.</p>
        <p>Designed this template with <i className="fa-solid fa-heart fa-beat" style={{color:'red'}}></i> by Adithya Bijimon </p>
    </div>
    </div>
  )
}

export default Footer