import { useEffect, useReducer } from 'react';
import Button from '../Button/Button';
import styles from './JournalForm.module.css';
import cn from 'classnames';
import { INITIAL_STATE, setFormState } from './JournalForm.state';

const JournalForm = ({ addJournalItem }) => {
    const [formState, dispatchForm] = useReducer(setFormState, INITIAL_STATE);
    const { isValid, value, isFormSubmitValid } = formState;
    useEffect(() => {
        if (!isValid.title || !isValid.date || !isValid.tag || !isValid.description) {
            const timer = setTimeout(() => {
                dispatchForm({ type: 'RESET_VALIDATION' });
            }, 2000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [isValid]);
    useEffect(() => {
        if (isFormSubmitValid) {
            addJournalItem(value);
        }
    }, [isFormSubmitValid]);
    const addJournalItemHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        dispatchForm({ type: 'SUBMIT', payload: formProps });
    };
    return (
        <form onSubmit={addJournalItemHandler} className={styles['journal-form']}>
            <div className={styles.title}>
                <input name='title' type='text' className={cn(styles['input-title'], {
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
                <input name='date' type='date' id='date' className={styles.input} />
            </div>
            <div className={cn(styles['form-row'], {
                [styles['invalid']]: !isValid.tag
            })}>
                <label htmlFor='tag' className={styles['form-label']}>
                    <img src='folder.svg' alt='Иконка тега' />
                    <span>Метки</span>
                </label>
                <input name='tag' type='text' id='tag' className={styles.input} />
            </div>
            <textarea name='description' rows='20' type='text' className={cn(styles.input, styles.text, {
                [styles['invalid']]: !isValid.description
            })} />
            <Button text='Сохранить' className={styles['save-button']} />
        </form >
    );
};

export default JournalForm;