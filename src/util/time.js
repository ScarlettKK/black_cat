const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];



export default {
    getDate(dateStr) {
        const date = new Date(dateStr)
        return `${ date.getDate() } ${ monthNames[date.getMonth()] } ${ date.getFullYear() }`
    },
    getTime(dateStr, twenty4=true) {
        const date = new Date(dateStr)
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let postfix = hour >= 12? 'pm': 'am';
        if (twenty4) {
            return `${ hour }:${ minutes > 10? minutes : `0${ minutes }` }`;
        }

        return `${ hour > 12? (hour - 12) : hour }:${ minutes > 10? minutes : `0${ minutes }` } ${ postfix }`
    }
}