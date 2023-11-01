import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import styles from './JournalForm.module.css';
import cn from 'classnames';

const INITIAL_FORM_STATE = {
    title: true,
    date: true,
    tag: true,
    description: true
};
const JournalForm = ({ addJournalItem }) => {
    const [isFormFieldsValid, setIsFormFieldsValid] = useState(INITIAL_FORM_STATE);
    useEffect(() => {
        if (!isFormFieldsValid.title || !isFormFieldsValid.date || !isFormFieldsValid.tag || !isFormFieldsValid.description) {
            const timer = setTimeout(() => {
                setIsFormFieldsValid(INITIAL_FORM_STATE);
            }, 2000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [isFormFieldsValid]);
    const addJournalItemHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        let isFormValid = true;
        if (!formProps.title?.trim().length) {
            setIsFormFieldsValid((prevState => ({ ...prevState, title: false })));
            isFormValid = false;
        }
        else {
            setIsFormFieldsValid((prevState => ({ ...prevState, title: true })));
        }
        if (!formProps.date?.length) {
            setIsFormFieldsValid((prevState => ({ ...prevState, date: false })));
            isFormValid = false;
        }
        else {
            setIsFormFieldsValid((prevState => ({ ...prevState, date: true })));
        }
        if (!formProps.tag?.trim().length) {
            setIsFormFieldsValid((prevState => ({ ...prevState, tag: false })));
            isFormValid = false;
        }
        else {
            setIsFormFieldsValid((prevState => ({ ...prevState, tag: true })));
        }
        if (!isFormValid) return;
        addJournalItem(formProps);
    };
    return (
        <form onSubmit={addJournalItemHandler} className={styles['journal-form']}>
            <div className={styles.title}>
                <input name='title' type='text' className={cn(styles['input-title'], {
                    [styles['invalid']]: !isFormFieldsValid.title
                })} />
                <div className={styles['card-icon']}><img src='card.svg' alt='Иконка корзины' /></div>
            </div>
            <div className={cn(styles['form-row'], {
                [styles['invalid']]: !isFormFieldsValid.date
            })}>
                <label htmlFor='date' className={styles['form-label']}>
                    <img src='calendar.svg' alt='Иконка календаря' />
                    <span>Дата</span></label>
                <input name='date' type='date' id='date' className={styles.input} />
            </div>
            <div className={cn(styles['form-row'], {
                [styles['invalid']]: !isFormFieldsValid.tag
            })}>
                <label htmlFor='tag' className={styles['form-label']}>
                    <img src='folder.svg' alt='Иконка тега' />
                    <span>Метки</span>
                </label>
                <input name='tag' type='text' id='tag' className={styles.input} />
            </div>
            <textarea name='description' rows='20' type='text' className={cn(styles.input, styles.text)} />
            <Button text='Сохранить' className={styles['save-button']} />
        </form >
    );
};

export default JournalForm;