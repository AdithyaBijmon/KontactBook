import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Button } from '@mui/material';

function AllContacts() {
  return (
    <>
    <h1 className='text-center my-5'>All Contacts</h1>
    <Box className='m-5'>
      <Paper elevation={3} className='p-3 d-flex flex-column flex-md-row justify-content-md-between w-100'>
        {/* Contact Info Section */}
        <div className='d-flex flex-column flex-sm-row align-items-center align-items-sm-start'>
          <img 
            className='object-fit-cover rounded-circle' 
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" 
            alt="" 
            width={70} 
            height={70} 
          /> 
          <div className='ms-sm-5 mt-3 mt-sm-0 text-center text-sm-start'>
            <h6>Name: <span className='fw-bold'>John Smith</span></h6>
            <h6>Phone number: <span className='text-success fw-semibold'>8767564534</span></h6>
            <h6>Email: <span className='text-success'>John@gmail.com</span></h6>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className='d-flex align-items-center justify-content-center mt-3 mt-md-0'>
          <Button> <MdEdit className='fs-3 text-primary' /> </Button>
          <Button> <MdDelete className='fs-3 ms-4 text-danger' /> </Button>
        </div>
      </Paper>
    </Box>
    

    
    </>
  )
}

export default AllContacts