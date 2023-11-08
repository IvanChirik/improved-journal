import styles from './CardButton.module.css';
import cn from 'classnames';

const CardButton = ({ children, className, ...props }) => {
    const cl = cn(styles['card-button'], className);
    return <button {...props} className={cl}>{children}</button>;
};

export default CardButton;