export const regions = [
    {
        id:1,
        name:"Tashkent"
    },
    {
        id:2,
        name:"Gulistan"
    },
    {
        id:3,
        name:"Jizzakh"
    },
    {
        id:4,
        name:"Samarkand"
    },
    {
        id:5,
        name:"Farg'ona"
    },
    {
        id:6,
        name:"Andijan"
    },
    {
        id:7,
        name:"Namangan"
    },
    {
        id:8,
        name:"Bukhara"
    },
    {
        id:9,
        name:"Navoiy"
    },
    {
        id:10,
        name:"Termiz"
    },
    {
        id:11,
        name:"Qarshi"
    },
    {
        id:12,
        name:"Xiva"
    },
    {
        id:13,
        name:"Nukus"
    },
]

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]
const months = [
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
]

export function getDay(dt) {
    return days[new Date(dt * 1000).getDay()]
}
export function getDate(dt) {
    return `${new Date(dt * 1000).getDate()}  ${months[new Date(dt * 1000).getMonth()]}`
}
export function getTemp(el) {
    return `${Math.round(el) < 0 ? Math.round(el) : '+' + Math.round(el)}°`
}
export function getTime(dt){
    const time = new Date(dt * 1000)
    let h = time.getHours()
    let m = time.getMinutes()
    if (h < 10) h = `0${h}`
    if (m < 10) m = `0${m}`
    return `${h}:${m}`
}