import JournalItem from '../JournalItem/JournalItem';
import './JournalItems.css';

const JournalItems = ({ journalList }) => {
    if (journalList.length === 0) {
        return <p>Записи в журнале отсутствуют</p>;
    }
    const sortJournal = (list) => {
        return list.sort((a, b) => (a.date < b.date) ? 1 : -1);
    };
    return <div className='journal-list'>{
        sortJournal(journalList).map(item =>
            <JournalItem
                key={item.id}
                title={item.title}
                date={item.date}
                description={item.description}
            />)
    }</div>;
};

export default JournalItems;