import React, { ReactNode } from "react";
import "./Card.css";

interface ICardProps {
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

export default function Card(props: ICardProps) {
  const { className, style, children } = props;

  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );
}
