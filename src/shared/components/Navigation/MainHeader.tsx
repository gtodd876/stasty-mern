import React, { ReactNode } from "react";
import "./MainHeader.css";

interface MainHeaderProps {
  children: ReactNode;
}

export default function MainHeader(props: MainHeaderProps) {
  return <header className="main-header">{props.children}</header>;
}
