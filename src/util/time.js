/////////////////////////////////////////
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

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY;

const filters = {
    'today': () => {
        const now = new Date().valueOf();
        const oneDayAgo = now - DAY;

        return {
            before: parseInt(now/1000),
            after: parseInt(oneDayAgo/1000),
        }
    },
    'tomorrow': () => {
        const now = new Date().valueOf();
        const oneDayAfter = now + DAY;

        return {
            after: oneDayAfter,
        }
    },
    'this week': () => {
        const now = new Date().valueOf();
        const oneWeekAfter = now + WEEK;

        return {
            before: oneWeekAfter,
            after: now,
        }
    },
    'this month': () => {
        const now = new Date().valueOf();
        const oneMonthAfter = now + MONTH;

        return {
            before: oneMonthAfter,
            after: now,
        }
    }
}

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
    },
    getDiff(dateStr) {
        const date = new Date(dateStr)
        const now = new Date();
        const keys = [
            'years',
            'months',
            'weeks',
            'days',
            'hours',
            'minutes',
            'seconds',
        ]
        const map = {
            'years': this._diffInYears,
            'months': this._diffInMonths,
            'weeks': this._diffInWeeks,
            'days': this._diffInDays,
            'hours': this._diffInHours,
            'minutes': this._diffInMinutes,
            'seconds': this._diffInSeconds,
        }
        for (const i in keys) {
            const diff = map[keys[i]].call(this, now, date);
            if(diff > 1) {
                return `${ diff } ${ keys[i] } ago`;
            }
        }

        return 'just now';
    },
    getTimeFilter(key) {
        if (key == null) return null;
        return filters[key]();
    },
    _diffInSeconds(d2, d1) {
        const t2 = d2.getTime();
        const t1 = d1.getTime();

        return parseInt(this._filter((t2 - t1)/SECOND));
    },
    _diffInMinutes(d2, d1) {
        const t2 = d2.getTime();
        const t1 = d1.getTime();

        return parseInt(this._filter((t2 - t1)/MINUTE));
    },
    _diffInHours(d2, d1) {
        const t2 = d2.getTime();
        const t1 = d1.getTime();

        return parseInt(this._filter((t2 - t1)/HOUR));
    },
    _diffInDays(d2, d1) {
        const t2 = d2.getTime();
        const t1 = d1.getTime();

        return parseInt(this._filter((t2 - t1)/DAY));
    },
    _diffInWeeks(d2, d1) {
        const t2 = d2.getTime();
        const t1 = d1.getTime();
        return parseInt(this._filter((t2 - t1)/WEEK));
    },
    _diffInMonths(d2, d1) {
        const d1Y = d1.getFullYear();
        const d2Y = d2.getFullYear();
        const d1M = d1.getMonth();
        const d2M = d2.getMonth();

        return (d2M + d2Y * 12) - (d1M + d1Y * 12);
    },
    _diffInYears(d2, d1) {
        const months = this._diffInMonths(d2, d1);
        return parseInt(months / 12);
    },
    _filter(d) {
        return d < 1? 0: d;
    }
}