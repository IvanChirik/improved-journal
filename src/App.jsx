import './App.css';
import Body from './layout/Body/Body';
import Panel from './layout/Panel/Panel';
import { useState } from 'react';

const INITIAL_JOURNAL = [{
  id: 1,
  title: 'Поход',
  date: new Date(),
  description: 'Я был в лесу'
},
{
  id: 2,
  title: 'Путеществие',
  date: new Date(),
  description: 'Летали в грузию на дирижабле'
}
];
function App() {
  const [journalList, setJournalList] = useState(INITIAL_JOURNAL);
  const addJournalItem = (item) => {
    setJournalList(prevState => [...prevState, {
      id: prevState.length + 1,
      title: item.title,
      date: new Date(item.date),
      description: item.description
    }]);
  };
  return <div className='app'>
    <Panel journalList={journalList} />
    <Body addJournalItem={addJournalItem} />
  </div>;

}

export default App;
