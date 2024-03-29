import styles from './Button.module.css';
import cn from 'classnames';
const Button = ({ children, className }) => {
    return (
        <button className={cn(styles.button, styles.accent, className)}>{children}</button>
    );
};

export default Button;