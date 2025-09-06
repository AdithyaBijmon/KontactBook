import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { MdEdit, MdDelete } from "react-icons/md";
import { Button } from '@mui/material';
import { deleteContactAPI, editContactAPI, getContactAPI } from '../services/allAPI';
import Swal from 'sweetalert2';

function AllContacts() {
    const [contacts, setContacts] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [contactId, setContactId] = useState(null);
    const [editedContact, setEditedContact] = useState({}); 

    useEffect(() => {
        getContacts();
    }, []);

    const getContacts = async () => {
        try {
            const result = await getContactAPI();
            setContacts(result.data);
        } catch (err) {
            console.error(err);
        }
    };

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
                await deleteContactAPI(id);
                Swal.fire("Deleted!", "Your contact has been deleted.", "success");
                getContacts(); 
            }
        });
    };

    const handleEditClick = (contact) => {
        setIsEditing(true);
        setContactId(contact.id);
        setEditedContact({ ...contact }); 
    };

    const handleUpdateContact = async () => {
        try {
           
            await editContactAPI(contactId, editedContact);
            
            getContacts();
            
           
            setIsEditing(false);
            setContactId(null);
            setEditedContact({});
            
            Swal.fire("Success!", "Contact updated successfully.", "success");
        } catch (err) {
            console.error(err);
            Swal.fire("Error!", "Failed to update contact.", "error");
        }
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setContactId(null);
        setEditedContact({});
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedContact({ ...editedContact, [name]: value });
    };

    return (
        <>
            <h1 className='text-center my-5'>All Contacts</h1>
            <Box className='m-5'>
                {contacts?.length > 0 ?
                    contacts.map((con) => (
                        <Paper key={con.id} elevation={3} className='p-3 d-flex flex-column flex-md-row justify-content-md-between w-100 mt-3'>
                            {isEditing && con.id === contactId ? (
                               
                                <div className='d-flex flex-column flex-md-row justify-content-md-between w-100'>
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
                                                <input
                                                    type="text"
                                                    name="name"
                                                    onChange={handleInputChange}
                                                    className='form-control ms-2'
                                                    style={{ height: '30px' }}
                                                    value={editedContact.name || ''}
                                                />
                                            </div>
                                            <div className='d-flex align-items-center justify-content center mt-2'>
                                                <h6>Phone:</h6>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    onChange={handleInputChange}
                                                    className='form-control ms-2'
                                                    style={{ height: '30px' }}
                                                    value={editedContact.phone || ''}
                                                />
                                            </div>
                                            <div className='d-flex align-items-center justify-content center mt-2'>
                                                <h6>Email:</h6>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    onChange={handleInputChange}
                                                    className='form-control ms-2'
                                                    style={{ height: '30px' }}
                                                    value={editedContact.email || ''}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between mt-3 mt-md-0'>
                                        <Button onClick={handleUpdateContact}>Save</Button>
                                        <Button onClick={handleCancelEdit}>Cancel</Button>
                                    </div>
                                </div>
                            ) : (
                               
                                <div className='d-flex flex-column flex-md-row justify-content-md-between w-100'>
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
                                    <div className='d-flex align-items-center justify-content-between mt-3 mt-md-0'>
                                        <Button onClick={() => handleEditClick(con)}><MdEdit className='fs-3 text-primary' /></Button>
                                        <Button onClick={() => handleDeleteContact(con.id)}><MdDelete className='fs-3 text-danger' /></Button>
                                    </div>
                                </div>
                            )}
                        </Paper>
                    ))
                    :
                    <p>No contacts available! :(</p>
                }
            </Box>
        </>
    );
}

export default AllContacts;