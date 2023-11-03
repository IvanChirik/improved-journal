import cn from 'classnames';
import styles from './Input.module.css';
import { forwardRef } from 'react';

const Input = forwardRef(function Input({ className, apperence, isValid, ...props }, ref) {
    return (
        <input {...props} ref={ref} className={cn(styles.input, className, {
            [styles.invalid]: !isValid,
            [styles['input-title']]: apperence === 'title'
        })} />
    );
});

export default Input;

