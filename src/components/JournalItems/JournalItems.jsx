import JournalItem from '../JournalItem/JournalItem';
import './JournalItems.css';


const items = [{
    title: 'Поход',
    date: new Date(),
    description: 'Я был в лесу'
},
{
    title: 'Путеществие',
    date: new Date(),
    description: 'Летали в грузию на дирижабле'
}
];
const JournalItems = () => {
    return <div className='journal-list'>{
        items.map(item =>
            <JournalItem
                key={item.title}
                title={item.title}
                date={item.date}
                description={item.description}
            />)
    }</div>;
};

export default JournalItems;