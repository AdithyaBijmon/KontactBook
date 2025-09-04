import React from 'react'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { FaCircleUser } from "react-icons/fa6";
import { Box } from '@mui/material';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from '@mui/material/Button';

function NewContact() {
  return (
    <div style={{ width: '100%', height: '80vh' }}>
      <h1 className='text-center my-5'>Let's add a new contact</h1>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <FormControl variant="standard" className=' w-75'>
          <InputLabel htmlFor="name">
            Name
          </InputLabel>
          <Input
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
          <Input
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
          <Input
            id="email"
            startAdornment={
              <InputAdornment position="start">
                <MdEmail />
              </InputAdornment>
            }
          />
        </FormControl>
        <div className='w-75 mt-4'>
          
            <label htmlFor="file-upload" className='text-left'><FaCloudUploadAlt className='fs-5'/> Profile image </label>
            <span className='text-primary ms-3'>(Optional)</span>
          
          <input type="file" id="file-upload" className='form-control  mt-3 hidden' accept='image/*' />
        </div>

        <Button variant="contained"  style={{backgroundColor:'rgba(129, 99, 218, 1)',marginTop:'15px'}}>Add Contact</Button>

      </Box>
    </div>
  )
}

export default NewContact