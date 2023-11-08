import styles from './App.module.css';
import Body from './layout/Body/Body';
import Panel from './layout/Panel/Panel';
import { useEffect, useState } from 'react';

function App() {
  const [journalList, setJournalList] = useState([]);
  const [selectItem, setSelectItem] = useState({});
  useEffect(() => {
    const localJournal = JSON.parse(localStorage.getItem('journal'));
    if (localJournal) {
      setJournalList(localJournal.map(item => ({ ...item, date: new Date(item.date) })));
    }
  }, []);
  useEffect(() => {
    if (journalList.length) {
      localStorage.setItem('journal', JSON.stringify(journalList));
    }
  }, [journalList]);

  const addJournalItem = (item) => {
    console.log(item);
    if (!item.id) {
      setJournalList(prevState => [...prevState, {
        id: prevState.length + 1,
        title: item.title,
        date: new Date(item.date),
        description: item.description
      }]);
    }

  };
  return <div className={styles.app}>
    <Panel journalList={journalList} selectItem={setSelectItem} />
    <Body addJournalItem={addJournalItem} data={selectItem} />
  </div>;

}

export default App;
