import Button from '../Button/Button';
import './JournalForm.css';

const JournalForm = ({ addJournalItem }) => {
    const addJournalItemHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        addJournalItem(formProps);
    };
    return (
        <form onSubmit={addJournalItemHandler} className='journal-form'>
            <input name='title' type='text' />
            <input name='date' type='date' />
            <input name='tag' type='text' />
            <textarea name='description' type='text' />
            <Button text='Сохранить' />
        </form>
    );
};

export default JournalForm;