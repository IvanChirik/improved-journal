export const INITIAL_STATE = {
    isValid: {
        title: true,
        date: true,
        tag: true,
        description: true
    },
    value: {
        title: undefined,
        date: undefined,
        tag: undefined,
        description: undefined
    },
    isFormSubmitValid: false
};
export const setFormState = (state, action) => {
    switch (action.type) {
        case 'RESET_VALIDATION':
            return {
                ...state, isValid: INITIAL_STATE.isValid
            };
        case 'SUBMIT': {
            const titleData = action.payload?.title?.trim().length;
            const dateData = action.payload?.date;
            const descriptionData = action.payload?.description?.trim().length;
            console.log(titleData);
            if (titleData && dateData && descriptionData)
                return {
                    value: action.payload,
                    isValid: {
                        title: true,
                        date: true,
                        description: true,
                        tag: true
                    },
                    isFormSubmitValid: titleData && dateData && descriptionData
                };
        }
    }
};