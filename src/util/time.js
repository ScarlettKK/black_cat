import moment from 'moment'

const filters = {
    'today': () => {
        return {
            before: moment().valueOf(),
            after: moment().startOf('day').valueOf(),
        }
    },
    'tomorrow': () => {
        return {
            before: moment().startOf('day').valueOf(),
            after: moment().add(1, 'days').valueOf()
        }
    },
    'this week': () => {
        return {
            before: moment().week(moment().week() - 1).startOf('week').valueOf(),
            after: moment().week(moment().week() - 1).endOf('week').valueOf(),
        }
    },
    'this month': () => {
        return {
            before: moment().month(moment().month() - 1).startOf('month').valueOf(),
            after: moment().month(moment().month() - 1).endOf('month').valueOf()
        }
    }
}

export default {
    getDate(dateStr) {
        return moment(dateStr).format('LL');  
    },
    getTime(dateStr) {
        return moment(dateStr).format('LT');  
    },
    getDiff(dateStr) {
        return moment(dateStr).fromNow();   
    },
    getTimeFilter(key) {
        if (key == null) return null;
        return filters[key]();
    }
}