import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from '../UIElements/Backdrop';
import './Modal.css';

const ModalOverlay = (props: Props) => {
  const content = (
    <div className={`modal ${props.className}`}>
      <header className={`modal_header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : event => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  const modalRoot = document.getElementById('modal-root') as HTMLElement;
  return ReactDOM.createPortal(content, modalRoot);
};

export default function Modal(props: Props) {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
}

type Props = {
  className?: string;
  header: string;
  headerClass?: string;
  onSubmit?: () => void;
  contentClass?: string;
  children: ReactNode;
  footerClass: string;
  onCancel: () => void;
  show: boolean;
  footer: ReactNode;
};
