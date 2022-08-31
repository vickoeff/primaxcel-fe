import {
  Modal, 
  ModalOverlay, 
  ModalContent,  
  ModalBody, 
  ModalFooter, 
  Button
} from '@chakra-ui/react';

const ClientsDetailModal = ({isOpen, onClose, content}) => {
  

  return (
    <>
      <Modal size="6xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            {content}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ClientsDetailModal;