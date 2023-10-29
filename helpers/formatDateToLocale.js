const formatDateToLocale = (locale, date) => {
    const formatter = new Intl.DateTimeFormat(locale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return formatter.format(date);
};
export default formatDateToLocale;