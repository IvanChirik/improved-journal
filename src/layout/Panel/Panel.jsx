import Header from '../../components/Header/Header';
import JournalAddButton from '../../components/JournalAddButton/JournalAddButton';
import JournalItems from '../../components/JournalItems/JournalItems';
import './Panel.css';

const Panel = () => {
    return (
        <div className='panel'>
            <Header />
            <JournalAddButton />
            <JournalItems />
        </div>
    );
};

export default Panel;