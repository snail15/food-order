import React from 'react';
import classes from './Modal.module.css';
import { ReactDOM } from 'react';

const Backdrop = (props) => {
  <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>;
};

const portalElement = document.getElementById('overlay');

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)};
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      ;
    </React.Fragment>
  );
};

export default Modal;
