import JournalItem from '../JournalItem/JournalItem';
import styles from './JournalItems.module.css';

const JournalItems = ({ journalList, selectItem }) => {
    if (journalList.length === 0) {
        return <p>Записи в журнале отсутствуют</p>;
    }
    const sortJournal = (list) => {
        return list.sort((a, b) => (a.date > b.date) ? 1 : -1);
    };
    return <div className={styles['journal-list']}>{
        sortJournal(journalList).map(item =>
            <JournalItem
                onClick={() => selectItem(item)}
                key={item.id}
                title={item.title}
                date={item.date}
                description={item.description}
            />)
    }</div>;
};

export default JournalItems;