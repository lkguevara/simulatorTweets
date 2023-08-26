import "./ModalContainer.scss"
import PropTypes from 'prop-types';
import { Modal } from '@mui/material'

const ModalContainer = ({isOpen, closeModal, children}) => {
  return (
    <div className="modalContainer">
        <Modal
            className="modalContainer"
            open={isOpen}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="modalContainer__title">
                {children}
            </div>
        </Modal>
    </div>
  )
}

ModalContainer.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.node
};

export default ModalContainer