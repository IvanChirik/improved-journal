import Header from '../../components/Header/Header';
import JournalAddButton from '../../components/JournalAddButton/JournalAddButton';
import JournalItems from '../../components/JournalItems/JournalItems';
import './Panel.css';

const Panel = ({ journalList }) => {
    return (
        <div className='panel'>
            <Header />
            <JournalAddButton />
            <JournalItems journalList={journalList} />
        </div>
    );
};

export default Panel;