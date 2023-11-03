import { useEffect, useReducer } from 'react';
import Button from '../Button/Button';
import styles from './JournalForm.module.css';
import cn from 'classnames';
import { INITIAL_STATE, setFormState } from './JournalForm.state';

const JournalForm = ({ addJournalItem }) => {
    const [formState, dispatchForm] = useReducer(setFormState, INITIAL_STATE);
    const { isValid, values, isFormSubmitValid } = formState;
    useEffect(() => {
        let timer;
        if (!isValid.title || !isValid.date || !isValid.description) {
            timer = setTimeout(() => {
                dispatchForm({ type: 'RESET_VALIDATION' });
            }, 2000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [isValid]);
    useEffect(() => {
        if (isFormSubmitValid) {
            addJournalItem(values);
            dispatchForm({ type: 'CLEAR' });
        }
    }, [isFormSubmitValid, values, addJournalItem]);//Remove addJournalItem, values
    const addJournalItemHandler = (e) => {
        e.preventDefault();
        dispatchForm({ type: 'SUBMIT' });
    };
    const changeValues = (e) => {
        dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value } });
    };
    return (
        <form onSubmit={addJournalItemHandler} className={styles['journal-form']}>
            <div className={styles.title}>
                <input name='title' type='text' onChange={changeValues} value={values.title} className={cn(styles['input-title'], {
                    [styles['invalid']]: !isValid.title
                })} />
                <div className={styles['card-icon']}><img src='card.svg' alt='Иконка корзины' /></div>
            </div>
            <div className={cn(styles['form-row'], {
                [styles['invalid']]: !isValid.date
            })}>
                <label htmlFor='date' className={styles['form-label']}>
                    <img src='calendar.svg' alt='Иконка календаря' />
                    <span>Дата</span></label>
                <input name='date' type='date' onChange={changeValues} value={values.date} id='date' className={styles.input} />
            </div>
            <div className={cn(styles['form-row'])}>
                <label htmlFor='tag' className={styles['form-label']}>
                    <img src='folder.svg' alt='Иконка тега' />
                    <span>Метки</span>
                </label>
                <input name='tag' type='text' id='tag' onChange={changeValues} value={values.tag} className={styles.input} />
            </div>
            <textarea name='description' rows='20' type='text' onChange={changeValues} value={values.description} className={cn(styles.input, styles.text, {
                [styles['invalid']]: !isValid.description
            })} />
            <Button text='Сохранить' className={styles['save-button']} />
        </form >
    );
};

export default JournalForm;