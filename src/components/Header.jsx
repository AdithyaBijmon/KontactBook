import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import '../index.css'

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
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:'black',fontSize:'30px',fontFamily:'"Berkshire Swash", serif' }}>
                            Kontact
                        </Typography>
                       <Button variant="contained" style={{backgroundColor:'rgb(81, 33, 225)'}}>Contained</Button>
                       
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header