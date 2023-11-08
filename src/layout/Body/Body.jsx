import JournalForm from '../../components/JournalForm/JournalForm';
import styles from './Body.module.css';

const Body = ({ addJournalItem, data }) => {
    return (
        <div className={styles.body}>
            <JournalForm addJournalItem={addJournalItem} data={data} />
        </div>
    );
};

export default Body;