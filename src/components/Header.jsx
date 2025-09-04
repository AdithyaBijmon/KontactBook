import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import '../index.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" className='bg-transparent'>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:'black',fontSize:'30px'}}>
                           <Link to={'/'} style={{textDecoration:'none',fontFamily:'"Berkshire Swash", serif',color:'black'}}> Kontact</Link>
                        </Typography>
                       <Button variant="contained" style={{backgroundColor:'rgba(129, 99, 218, 1)'}}>contacts</Button>
                       
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header