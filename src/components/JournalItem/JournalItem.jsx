import './JournalItem.css';
import formatDateToLocale from '../../../helpers/formatDateToLocale';
import CardButton from '../CardButton/CardButton';


const JournalItem = ({ title, date, description }) => {
    return (
        <CardButton>
            <h2 className='journal-item__header'>{title}</h2>
            <div className='journal-item__body'>
                <div className='journal-item__date'>{formatDateToLocale('ru-RU', date)}</div>
                <div className='journal-item__description'>{description}</div>
            </div>
        </CardButton >
    );
};

export default JournalItem;