import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

type Props = {
  onClick: () => void;
};

export default function Backdrop(props: Props) {
  const backdropRoot = document.getElementById('backdrop-root') as HTMLElement;
  const backdrop = <div className="backdrop" onClick={props.onClick}></div>;

  return ReactDOM.createPortal(backdrop, backdropRoot);
}
