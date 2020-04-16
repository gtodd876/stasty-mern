import React, { ReactNode } from 'react';
import './MainHeader.css';

export default function MainHeader(props: Props) {
  return <header className="main-header">{props.children}</header>;
}

type Props = {
  children: ReactNode;
};
