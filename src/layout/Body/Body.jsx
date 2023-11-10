import JournalForm from '../../components/JournalForm/JournalForm';
import styles from './Body.module.css';

const Body = ({ addJournalItem, data, deleteSelectItem, selectItem }) => {
    return (
        <div className={styles.body}>
            <JournalForm
                selectItem={selectItem}
                addJournalItem={addJournalItem}
                data={data}
                deleteSelectItem={deleteSelectItem} />
        </div>
    );
};

export default Body;