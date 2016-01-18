import * as React from 'react';
import Modal from './Modal';
import ModalContent from './ModalContent';
import LoginForm from './LoginForm';


const LoginModal = ({ isVisible, isPending, hasError, onSubmit }) => {
  return (
    <Modal isVisible={ isVisible }>
      <ModalContent style={ styles.base }>
        <h1 className="mr2 ml2">Login</h1>

        <LoginForm
          isPending={ isPending }
          hasError={ hasError }
          onSubmit={ onSubmit } />
      </ModalContent>
    </Modal>
  );
};

const styles = {
  base: {
  },
};


export default LoginModal;
