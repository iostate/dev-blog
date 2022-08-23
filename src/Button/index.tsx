import React, { MouseEventHandler } from 'react';

type Props = {
  onClick: MouseEventHandler,
  text: string
}

const Button = ({ onClick, text }: Props) => {
  return <button type='button' onClick={onClick}>{text}</button>;
};

export default Button;
