import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

export default function Button(props: Props) {
  if (props.href) {
    return (
      <a
        className={`button button--${props.size || 'default'} ${props.inverse && 'button--inverse'} ${
          props.danger && 'button--danger'
        }`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        className={`button button--${props.size || 'default'} ${props.inverse && 'button--inverse'} ${
          props.danger && 'button--danger'
        }`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`button button--${props.size || 'default'} ${props.inverse && 'button--inverse'} ${
        props.danger && 'button--danger'
      }`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

type Props = {
  href?: string;
  size?: string;
  inverse?: boolean;
  danger?: boolean;
  children: ReactNode;
  to?: string;
  exact?: boolean;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  disabled?: boolean;
};
