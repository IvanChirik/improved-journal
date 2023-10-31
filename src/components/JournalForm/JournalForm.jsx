import Button from '../Button/Button';
import styles from './JournalForm.module.css';

const JournalForm = ({ addJournalItem }) => {
    const addJournalItemHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        addJournalItem(formProps);
    };
    return (
        <form onSubmit={addJournalItemHandler} className={styles['journal-form']}>
            <div><input name='title' type='text' className={styles.title} /></div>
            <input name='date' type='date' className={styles.date} />
            <input name='tag' type='text' className={styles.tag} />
            <textarea name='description' type='text' className={styles.description} />
            <Button text='Сохранить' />
        </form>
    );
};

export default JournalForm;