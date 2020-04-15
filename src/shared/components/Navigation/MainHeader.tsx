import React, { ReactNode } from 'react';
import './MainHeader.css';

type Props = {
  children: ReactNode;
};

export default function MainHeader(props: Props) {
  return <header className="main-header">{props.children}</header>;
}
