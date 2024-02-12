import * as React from 'react'
import {AppBar,Toolbar,Typography,Link,Button} from "@mui/material"
import { useDispatch } from 'react-redux';
import { logout } from '../slices/userSlice';
import { ClassNames } from '@emotion/react';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <>
    
       <AppBar
        position="static"
        color="primary"
        elevation={4}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
           Tooth Tracker
          </Typography>
          <nav >
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
             Home
            </Link>
           
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
          
          <Button variant="contained"
                    onClick={() => {
                        dispatch(logout()); 
                        window.location.href = "/";

                    }}
                    >
                        Logout
                    </Button>

          


        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
