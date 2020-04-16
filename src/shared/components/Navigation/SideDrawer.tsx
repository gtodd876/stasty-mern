import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

export default function SideDrawer(props: Props) {
  const { show, onClick, children } = props;

  const drawer = (
    <CSSTransition in={show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
      <aside className="side-drawer" onClick={onClick}>
        {children}
      </aside>
    </CSSTransition>
  );
  const drawerRoot = document.getElementById('drawer-root') as HTMLElement;

  return ReactDOM.createPortal(drawer, drawerRoot);
}

type Props = {
  children: ReactNode;
  show: boolean;
  onClick: () => void;
};
