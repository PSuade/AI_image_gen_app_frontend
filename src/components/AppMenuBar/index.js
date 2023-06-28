import React from 'react';
import PropTypes from  'prop-types';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './AppMenuBar.css'

const AppMenuBar = (props) => {
    const { isUserSignedIn, onSignupButtonClick } = props;

    return <AppBar position="static">
        <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
            </IconButton>
            { isUserSignedIn ? 
                <>
                    <Button variant="contained" className="btn">My gallery</Button>
                    <Button variant="contained" className="btn">Log out</Button>
                </>
            :
                <>
                    <Button variant="contained" className="btn">Log in</Button>
                    <Button variant="contained" className="btn" onClick={onSignupButtonClick}>Sign up</Button>
                </>    
            }
        </Toolbar>
    </AppBar>
}

AppMenuBar.propTypes = {
    isUserSignedIn: PropTypes.bool.isRequired,
    onSignupButtonClick: PropTypes.func
}

export default AppMenuBar

