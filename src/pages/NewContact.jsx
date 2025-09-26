import React, { useState } from 'react'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { FaCircleUser } from "react-icons/fa6";
import { Box } from '@mui/material';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Button from '@mui/material/Button';
import { addContactAPI } from '../services/allAPI';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function NewContact() {

  const [contactInput, setContactInput] = useState({
    name: '',
    phone: '',
    email: ''
  })

  const [showAlert, setShowAlert] = useState(false);
      const [alertMessage, setAlertMessage] = useState('');
      const [alertSeverity, setAlertSeverity] = useState('success');
  // console.log(contactInput)

  const handleContacts = async () => {
    const { name, phone, email } = contactInput

    if (name && phone && email) {
      try {
        const result = await addContactAPI(contactInput)
        
          const success = true; // Replace with actual API response check

      if (success) {
        setAlertMessage('Contact added successfully!');
        setAlertSeverity('success');
      } else {
        setAlertMessage('Error adding contact. Please try again.');
        setAlertSeverity('error');
      }
      setShowAlert(true);
         
        

        setContactInput({
          name: '',
          phone: '',
          email: ''
        })
        // console.log(result)
      }
      catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div style={{ width: '100%', height: '80vh' }}>
           {showAlert && (
          <Stack sx={{ width: '100%', mt: 2,display:'flex',alignItems:'center',justifyContent:'center'}} spacing={2}>
            <Alert
              severity={alertSeverity}
              onClose={() => setShowAlert(false)} // Allows closing the alert
            >
              {alertMessage}
            </Alert>
          </Stack>
        )}
      <h1 className='text-center my-5'>Let's add a new contact</h1>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <FormControl variant="standard" className=' w-75'>
          <InputLabel htmlFor="name">
            Name
          </InputLabel>
          <Input required  onChange={(e) => setContactInput({ ...contactInput, name: e.target.value })} value={contactInput.name}
            id="name"
            startAdornment={
              <InputAdornment position="start">
                <FaCircleUser />
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl variant="standard" className=' w-75 my-5'>
          <InputLabel htmlFor="phone">
            Phone number
          </InputLabel>
          <Input required onChange={(e) => setContactInput({ ...contactInput, phone: e.target.value })} value={contactInput.phone}
            id="phone"
            startAdornment={
              <InputAdornment position="start">
                <FaPhoneAlt />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl variant="standard" className=' w-75 '>
          <InputLabel htmlFor="email">
            Email
          </InputLabel>
          <Input required onChange={(e) => setContactInput({ ...contactInput, email: e.target.value })} value={contactInput.email}
            id="email"
            startAdornment={
              <InputAdornment position="start">
                <MdEmail />
              </InputAdornment>
            }
          />
        </FormControl>
        {/* <div className='w-75 mt-4'>
          
            <label htmlFor="file-upload" className='text-left'><FaCloudUploadAlt className='fs-5'/> Profile image </label>
            <span className='text-primary ms-3'>(Optional)</span>
          
          <input onChange={(e)=>setContactInput({...contactInput,image:e.target.value})} value={contactInput.image} type="file" id="file-upload" className='form-control  mt-3 hidden' accept='image/*' />
        </div> */}

        <Button variant="contained" onClick={handleContacts} style={{ backgroundColor: 'rgba(129, 99, 218, 1)', marginTop: '15px' }}>Add Contact</Button>

      </Box>
    </div>
  )
}

export default NewContact