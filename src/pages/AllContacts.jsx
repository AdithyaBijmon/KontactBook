import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Button } from '@mui/material';
import { getContactAPI } from '../services/allAPI';

function AllContacts() {
 const [contacts,setContacts] = useState([])


 useEffect(()=>{
  getContacts()
 },[])

 const getContacts = async()=>{
   try{
     const result = await getContactAPI()
     setContacts(result.data)
   }
   catch(err){
    console.log(err)
   }
 }

  return (
    <>
    <h1 className='text-center my-5'>All Contacts</h1>
    <Box className='m-5'>
        {contacts.length>0?
            contacts?.map((con,index)=>(
      <Paper key={index} elevation={3}  className='p-3 d-flex flex-column flex-md-row justify-content-md-between w-100 mt-3'>
        {/* Contact Info Section */}
        <div className='d-flex flex-column flex-sm-row align-items-center align-items-sm-start'>
          <img 
            className='object-fit-cover rounded-circle' 
            src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" 
            alt="" 
            width={70} 
            height={70} 
          /> 
          <div className='ms-sm-5 mt-3 mt-sm-0 text-center text-sm-start'>
         
              
               <h6>Name: <span className='fw-bold'>{con?.name}</span></h6>
            <h6>Phone number: <span className='text-success fw-semibold'>{con?.phone}</span></h6>
            <h6>Email: <span className='text-success'>{con?.email}</span></h6>
            
          
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className='d-flex align-items-center justify-content-center mt-3 mt-md-0'>
          <Button> <MdEdit className='fs-3 text-primary' /> </Button>
          <Button onClick={()=>handleDeleteContact(con?.id)}> <MdDelete className='fs-3 ms-4 text-danger' /> </Button>
        </div>
      </Paper>
            )) :
            <p>No contacts available! :(</p>
           }
    </Box>
    

    
    </>
  )
}

export default AllContacts