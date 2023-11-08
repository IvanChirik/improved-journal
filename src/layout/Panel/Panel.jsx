import Header from '../../components/Header/Header';
import JournalAddButton from '../../components/JournalAddButton/JournalAddButton';
import JournalItems from '../../components/JournalItems/JournalItems';
import styles from './Panel.module.css';

const Panel = ({ journalList, selectItem }) => {
    return (
        <div className={styles.panel}>
            <Header />
            <JournalAddButton />
            <JournalItems journalList={journalList} selectItem={selectItem} />
        </div>
    );
};

export default Panel;