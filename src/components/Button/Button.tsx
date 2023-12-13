import React, { ReactNode } from 'react'
import classes from "./Button.module.scss";

type ButtonProps = {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className={classes.Button}>
      {children}
    </button>
  )
}

export default Button