import React, { useState } from 'react'
import './App.css';
import { AppMenuBar, SignupForm } from './components';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="App">
      <AppMenuBar isUserSignedIn={false} onSignupButtonClick={toggleModal} />
      <SignupForm isModalOpen={isModalOpen} onSubmit={() => console.log("i submitted")} onClose={toggleModal} />
    </div>
  );
}

export default App;
