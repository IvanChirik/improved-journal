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
    if (!item.id) {
      setJournalList(prevState => [...prevState, {
        id: journalList.length > 0 ? Math.max(...journalList.map(i => i.id)) + 1 : 1,
        title: item.title,
        tag: item.tag,
        date: new Date(item.date),
        description: item.description
      }]);
    }
    else {
      setJournalList(journalList.map(i => {
        if (item.id === i.id) {
          return { ...item, date: new Date(item.date) };
        }
        return i;
      }));
    }
  };
  const deleteSelectItem = (id) => {
    const filtredJournal = journalList.filter(item => item.id !== id);
    setJournalList(filtredJournal);
    localStorage.setItem('journal', JSON.stringify(filtredJournal));

  };
  return <div className={styles.app}>
    <Panel
      journalList={journalList}
      selectItem={setSelectItem} />
    <Body
      addJournalItem={addJournalItem}
      data={selectItem}
      deleteSelectItem={deleteSelectItem}
      selectItem={setSelectItem} />
  </div>;

}

export default App;
