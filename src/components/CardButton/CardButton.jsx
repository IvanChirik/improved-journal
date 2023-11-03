import styles from './CardButton.module.css';
import cn from 'classnames';

const CardButton = ({ children, className }) => {
    const cl = cn(styles['card-button'], className);
    return <button className={cl}>{children}</button>;
};

export default CardButton;