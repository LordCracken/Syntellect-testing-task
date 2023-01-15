import { FC } from 'react';
import { IButton } from '../interfaces';

const Button: FC<IButton> = ({ configs }) => (
  <button onClick={configs.callback}>{configs.text}</button>
);

export default Button;
