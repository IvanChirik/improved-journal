import styles from './Button.module.css';
import cn from 'classnames';
const Button = ({ text, className }) => {
    return (
        <button className={cn(styles.button, styles.accent, className)}>{text}</button>
    );
};

export default Button;