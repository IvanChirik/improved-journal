import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';

const JournalAddButton = () => {
    return (
        <CardButton className='journal-add'>
            <img src='add-button-logo.svg' alt='Логотип добавления записи' />
            Новая запись
        </CardButton>
    );
};

export default JournalAddButton;