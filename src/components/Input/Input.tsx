import { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
type InputProp = Omit<InputProps, 'value'>;

// value: number | null;

export const Input: FC<InputProps> = ({ className, ...props }) => {
  return <input className={classNames(styles.input, className)} {...props} />;
};
