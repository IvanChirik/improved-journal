import { useEffect, useReducer, useRef } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './JournalForm.module.css';
import cn from 'classnames';
import { INITIAL_STATE, setFormState } from './JournalForm.state';

const JournalForm = ({ addJournalItem, data, deleteSelectItem, selectItem }) => {
    const [formState, dispatchForm] = useReducer(setFormState, INITIAL_STATE);
    const { isValid, values, isFormSubmitValid } = formState;
    const titleRef = useRef();
    const dateRef = useRef();
    const descriptionRef = useRef();
    const tagRef = useRef();
    const focusInput = (isValid) => {
        switch (true) {
            case !isValid.title:
                titleRef.current.focus();
                break;
            case !isValid.date:
                dateRef.current.focus();
                break;
            case !isValid.description:
                descriptionRef.current.focus();
                break;
            default:
                return;
        }
    };
    useEffect(() => {
        let timer;
        if (!isValid.title || !isValid.date || !isValid.description) {
            focusInput(isValid);
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
    useEffect(() => {
        if (data.title) {
            dispatchForm({ type: 'SET_VALUE', payload: { ...data, date: data.date.toISOString().slice(0, 10) } });
        }
        else {
            dispatchForm({ type: 'CLEAR' });
            titleRef.current.focus();
        }
    }, [data]);
    const deleteHandler = (e) => {
        e.preventDefault();
        deleteSelectItem(formState.values.id);
        selectItem({});
        dispatchForm({ type: 'CLEAR' });
    };
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
                <Input
                    name='title'
                    type='text'
                    ref={titleRef}
                    isValid={isValid.title}
                    onChange={changeValues}
                    value={values.title}
                    apperence={'title'}
                />
                {data.id && <button onClick={deleteHandler} className={styles['card-icon']}><img src='card.svg' alt='Иконка корзины' /></button>}
            </div>
            <div className={cn(styles['form-row'], {
                [styles['invalid']]: !isValid.date
            })}>
                <label htmlFor='date' className={styles['form-label']}>
                    <img src='calendar.svg' alt='Иконка календаря' />
                    <span>Дата</span></label>
                <Input
                    name='date'
                    type='date'
                    min='01-01-2000'
                    ref={dateRef}
                    onChange={changeValues}
                    value={values.date}
                    id='date' />
            </div>
            <div className={cn(styles['form-row'])}>
                <label htmlFor='tag' className={styles['form-label']}>
                    <img src='folder.svg' alt='Иконка тега' />
                    <span>Метки</span>
                </label>
                <Input
                    name='tag'
                    type='text'
                    ref={tagRef}
                    id='tag'
                    onChange={changeValues}
                    value={values.tag} />
            </div>
            <textarea
                name='description'
                rows='20' type='text'
                ref={descriptionRef}
                onChange={changeValues}
                value={values.description}
                className={cn(styles.input, styles.text, {
                    [styles['invalid']]: !isValid.description
                })} />
            <Button className={styles['save-button']}>Сохранить</Button>
        </form >
    );
};

export default JournalForm;