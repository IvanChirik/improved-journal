export const INITIAL_STATE = {
    isValid: {
        title: true,
        date: true,
        description: true
    },
    values: {
        title: '',
        date: '',
        tag: '',
        description: ''
    },
    isFormSubmitValid: false
};
export const setFormState = (state, action) => {
    switch (action.type) {
        case 'RESET_VALIDATION':
            return {
                ...state, isValid: INITIAL_STATE.isValid
            };
        case 'SET_VALUE': return {
            ...state, values: { ...state.values, ...action.payload }
        };
        case 'SUBMIT': {
            const titleData = state.values.title?.trim().length;
            const dateData = state.values.date;
            const descriptionData = state.values.description?.trim().length;
            return {
                ...state,
                isValid: {
                    title: titleData,
                    date: dateData,
                    description: descriptionData
                },
                isFormSubmitValid: titleData && dateData && descriptionData
            };
        }
        case 'CLEAR':
            return { ...state, isFormSubmitValid: INITIAL_STATE.isFormSubmitValid, values: INITIAL_STATE.values };
        default:
            return INITIAL_STATE;
    }
};