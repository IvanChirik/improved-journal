import JournalForm from '../../components/JournalForm/JournalForm';
import './Body.css';

const Body = ({ addJournalItem }) => {
    return (
        <div className='body'>
            <JournalForm addJournalItem={addJournalItem} />
        </div>
    );
};

export default Body;