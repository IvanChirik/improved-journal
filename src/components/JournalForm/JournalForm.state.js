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
            const titleData = action.payload?.title?.trim().length;
            const dateData = action.payload.date;
            const descriptionData = action.payload?.description?.trim().length;
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
            return { ...state, values: INITIAL_STATE.values };
        default:
            return INITIAL_STATE;
    }
};