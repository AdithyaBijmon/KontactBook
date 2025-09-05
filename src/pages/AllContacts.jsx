import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Button, containerClasses } from '@mui/material';
import { deleteContactAPI, editContactAPI, getContactAPI, getUpdateContactAPI } from '../services/allAPI';
import Swal from 'sweetalert2'

function AllContacts() {
  const [contacts, setContacts] = useState([])
  const [isEditing, setIsEditing] = useState(false);


  useEffect(() => {
    getContacts()
  }, [])

  useEffect(() => {
    getEditContactDetails()
  })

  const getContacts = async () => {
    try {
      const result = await getContactAPI()
      setContacts(result.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleDeleteContact = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {

        await deleteContactAPI(id)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        getContacts()
      }
    });


  }

  const handleUpdateContact = async () => {
    try {
      const result = await editContactAPI(contacts?.id, contacts)
    }
    catch (err) {
      console.log(err)
    }

  }

  const getEditContactDetails = async () => {
    try {
      const result = await getUpdateContactAPI(contacts?.id)
      setContacts(result?.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <h1 className='text-center my-5'>All Contacts</h1>
      <Box className='m-5'>
        {contacts?.length > 0 ?
          contacts?.map((con, index) => (
            <Paper key={index} elevation={3} >
              {/* Contact Info Section */}
              {isEditing ? <div className='p-3 d-flex flex-column flex-md-row justify-content-md-between w-100 mt-3'>
                <div className='d-flex flex-column flex-sm-row align-items-center align-items-sm-start'>
                  <img
                    className='object-fit-cover rounded-circle'
                    src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                    alt=""
                    width={70}
                    height={70}
                  />
                  <div className='ms-sm-5 mt-3 mt-sm-0 text-center text-sm-start'>


                    <div className='d-flex align-items-center justify-content center'>
                      <h6>Name:</h6>
                      <input type="text" onChange={e => setContacts({ ...contacts, name: e.target.value })} className='form-control ms-2' style={{ height: '30px' }} value={con?.name} />
                    </div>
                    <div className='d-flex align-items-center justify-content center mt-2'>
                      <h6>Phone:</h6>
                      <input type="text" className='form-control ms-2' style={{ height: '30px' }} />
                    </div>
                    <div className='d-flex align-items-center justify-content center mt-2'>
                      <h6>Email:</h6>
                      <input type="text" className='form-control ms-2' style={{ height: '30px' }} />
                    </div>



                  </div>
                </div>

                {/* Action Buttons Section */}
                <div className='d-flex align-items-center justify-content-between mt-3 mt-md-0'>
                  <Button onClick={handleUpdateContact}> Save </Button>
                  <Button onClick={() => handleDeleteContact(con?.id)}> Cancel</Button>
                </div>
              </div>
                :
                <div className='p-3 d-flex flex-column flex-md-row justify-content-md-between w-100 mt-3'>
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
                  <div className='d-flex align-items-center justify-content-between mt-3 mt-md-0'>
                    <Button onClick={() => setIsEditing(true)}> <MdEdit className='fs-3 text-primary' /> </Button>
                    <Button onClick={() => handleDeleteContact(con?.id)}> <MdDelete className='fs-3 text-danger' /> </Button>
                  </div>
                </div>

              }
            </Paper>
          )) :
          <p>No contacts available! :(</p>
        }
      </Box>



    </>
  )
}

export default AllContacts