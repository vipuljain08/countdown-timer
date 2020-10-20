const dayEl = document.getElementById('days')
const hourEl = document.getElementById('hours')
const minEl = document.getElementById('minutes')
const secEl = document.getElementById('seconds')

const itsMyBirthday = '8 Aug 2021'

const startCountdown = () => {
    const currentDate = new Date()
    const futureDate = new Date(itsMyBirthday)
    const milliSeconds = (futureDate - currentDate)
    const seconds = Math.floor((milliSeconds/1000)%60)
    const minutes = Math.floor(((milliSeconds/1000)/60)%60)
    const hours = Math.floor((((milliSeconds/1000)/60)/60)%24)
    const days = Math.floor((((milliSeconds/1000)/60)/60)/24)

    dayEl.innerHTML = formatCounts(days)
    hourEl.innerHTML = formatCounts(hours)
    minEl.innerHTML = formatCounts(minutes)
    secEl.innerHTML = formatCounts(seconds)
}

const formatCounts = count => count<10 ? `0${count}` : count

startCountdown()
setInterval(startCountdown, 1000)