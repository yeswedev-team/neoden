/* eslint-disable react/display-name */
import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import Portal from './Portal';

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);
  const { id } = props;

  const handleOpen = () => {
    setDisplay(true);
  };

  const handleClose = () => {
    setDisplay(false);
  };

  useImperativeHandle(ref, () => ({
    openModal: () => handleOpen(),
    closeModal: () => handleClose(),
  }));

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  if (display) {
    return (
      <Portal>
        <div className={`modal-wrapper ${id}`}>
          <div className="modal-backdrop" />
          <div className="modal-content">
            {props.children}
            <button type="button" className="close" onClick={handleClose}>
              <strong>X</strong>
              <span className="sr-only">Fermer</span>
            </button>
          </div>
        </div>
      </Portal>
    );
  }

  return null;
});

export default Modal;
