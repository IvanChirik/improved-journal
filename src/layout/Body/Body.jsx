import JournalForm from '../../components/JournalForm/JournalForm';
import styles from './Body.module.css';

const Body = ({ addJournalItem }) => {
    return (
        <div className={styles.body}>
            <JournalForm addJournalItem={addJournalItem} />
        </div>
    );
};

export default Body;