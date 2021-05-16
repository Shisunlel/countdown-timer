document.querySelector('.wrapper').style.display = 'flex'

const dayHolder = document.querySelector('.day-number')
const hourHolder = document.querySelector('.hour-number')
const minuteHolder = document.querySelector('.minute-number')
const secondHolder = document.querySelector('.second-number')

const countdown = () => {
    const today = Date.now()
    const due = new Date('2021-05-25 21:15:00').getTime()
    const diff = due - today;

    //convert to correct timestamp
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    //calculate
    const diffDay = Math.floor(diff / day)
    const diffHour = Math.floor((diff % day) / hour)
    const diffMinute = Math.floor((diff % hour) / minute)
    const diffSecond = Math.floor((diff % minute) / second)

    //output
    dayHolder.innerText = diffDay
    hourHolder.innerText = diffHour
    minuteHolder.innerText = diffMinute
    secondHolder.innerText = diffSecond
}

setInterval(countdown, 1000);