import Button from '../Button/Button';
import './JournalForm.css';

const JournalForm = () => {
    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        console.log(formProps);
    };
    return (
        <form onSubmit={addJournalItem} className='journal-form'>
            <input name='title' type='text' />
            <input name='date' type='date' />
            <input name='tag' type='text' />
            <textarea type='text' name='post' />
            <Button text='Сохранить' />
        </form>
    );
};

export default JournalForm;