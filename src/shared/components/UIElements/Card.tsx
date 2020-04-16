import React, { ReactNode } from 'react';
import './Card.css';

export default function Card(props: Props) {
  const { className, style, children } = props;

  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );
}

type Props = {
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
};
