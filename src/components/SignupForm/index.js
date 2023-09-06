import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Modal, Box, Typography, TextField, Button} from '@mui/material'
import { signupUser } from '../../api';
import './SignupForm.css';

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

        if (password === confirmPassword && checkValidation(payload)) {
            const response = signupUser(payload)
            console.log(response);
        } else {
            console.log("Not valid")
        }
    }

    const checkValidation = (payload) => {
        return payload.firstName && payload.lastName && payload.email && payload.password
    }

    return <Modal
        open={isModalOpen}
        onClose={onClose}
        aria-labelledby="sign-up-form"
        aria-describedby="sign-up-form"
        >
            <div className={'modalContainer'}>
                <TextField className="inputField" id="outlined-basic" label="First name" value={firstName} onChange={(event) => {setFirstName(event.target.value)}} variant="filled" />
                <TextField className="inputField" id="outlined-basic" label="Last name" value={lastName} onChange={(event) => {setLastName(event.target.value)}} variant="filled" />
                <TextField className="inputField" id="outlined-basic" label="Email address" value={email} onChange={(event) => {setEmail(event.target.value)}} variant="filled" />
                <TextField className="inputField" id="outlined-basic" label="Password" value={password} onChange={(event) => {setPassword(event.target.value)}} variant="filled" />
                <TextField className="inputField" id="outlined-basic" label="Confirm password" value={confirmPassword} onChange={(event) => {setConfirmPassword(event.target.value)}} variant="filled" />
                <Button className="btn" variant="contained" onClick={handleSubmitClick}>Submit</Button>
                {/* Form is gonna go here */}
            </div>
    </Modal>
}

SignupForm.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default SignupForm