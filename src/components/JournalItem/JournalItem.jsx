import styles from './JournalItem.module.css';
import formatDateToLocale from '../../../helpers/formatDateToLocale';
import CardButton from '../CardButton/CardButton';


const JournalItem = ({ title, date, description, ...props }) => {
    return (
        <CardButton {...props}>
            <h2 className={styles['journal-item__header']}>{title}</h2>
            <div className={styles['journal-item__body']}>
                <div className={styles['journal-item__date']}>{formatDateToLocale('ru-RU', date)}</div>
                <div className={styles['journal-item__description']}>{description}</div>
            </div>
        </CardButton >
    );
};

export default JournalItem;