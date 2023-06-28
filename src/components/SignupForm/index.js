import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Modal, Box, Typography, TextField, Button} from '@mui/material'

const SignupForm = (props) => {
    const { isModalOpen, onClose } = props;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmitClick = () => {
        const payload = {
            firstName,
            lastName,
            email,
            password
        }

        console.log("sending payload...", payload);

        fetch('http://127.0.0.1:5000', {
            method: "POST", // or 'PUT'
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
    }

    return <Modal
        open={isModalOpen}
        onClose={onClose}
        aria-labelledby="sign-up-form"
        aria-describedby="sign-up-form"
        >
            <Box sx={{
                width: 300,
                height: 300,
                backgroundColor: 'primary.light',
                '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
                },
                position: 'absolute',
                top: '50%',
                left: '50%',
            }}>
                <TextField id="outlined-basic" label="firstName" value={firstName} onChange={(event) => {setFirstName(event.target.value)}} variant="outlined" />
                <TextField id="outlined-basic" label="lastName" value={lastName} onChange={(event) => {setLastName(event.target.value)}} variant="outlined" />
                <TextField id="outlined-basic" label="email" value={email} onChange={(event) => {setEmail(event.target.value)}} variant="outlined" />
                <TextField id="outlined-basic" label="password" value={password} onChange={(event) => {setPassword(event.target.value)}} variant="outlined" />
                <TextField id="outlined-basic" label="confirmPassword" value={confirmPassword} onChange={(event) => {setConfirmPassword(event.target.value)}}variant="outlined" />
                <Button onClick={handleSubmitClick}>Submit</Button>
                {/* Form is gonna go here */}
            </Box>
    </Modal>
}

SignupForm.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default SignupForm