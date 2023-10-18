import React, { useState } from 'react'
import './App.css';
import { AppMenuBar, SignupForm } from './components';
import { useTheme } from '@mui/material/styles';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const theme = useTheme()

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppMenuBar isUserSignedIn={false} onSignupButtonClick={toggleModal} />
        <SignupForm isModalOpen={isModalOpen} onSubmit={() => console.log("i submitted")} onClose={toggleModal} />
      </ThemeProvider>
    </div>
  );
}

export default App;
