import CardButton from '../CardButton/CardButton';
import styles from './JournalAddButton.module.css';

const JournalAddButton = ({ selectItem }) => {
    return (
        <CardButton className={styles['journal-add']} onClick={() => selectItem({})}>
            <img src='add-button-logo.svg' alt='Логотип добавления записи' />
            Новая запись
        </CardButton>
    );
};

export default JournalAddButton;