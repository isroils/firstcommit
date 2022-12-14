const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hourNumber = document.querySelector('.hours'),
    minNumber = document.querySelector('.minutes');

function clock() {
    const time = new Date(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();

    hour.style.transform = `rotate(${hours * 30}deg)`
    min.style.transform = `rotate(${minutes * 6}deg)`
    sec.style.transform = `rotate(${seconds * 6}deg)`

    hourNumber.innerHTML = hours < 10 ? '0' + hours : hours
    minNumber.innerHTML = minutes < 10 ? '0' + minutes : minutes

    setTimeout(() => {
        clock()
    }, 1000)
}
clock()

const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContentItem = document.querySelectorAll('.tabsContentItem');
tabsItem.forEach((element, index) => {
    element.addEventListener('click', function () {
        tabsItem.forEach((el, i) => {
            el.classList.remove('active')
            tabsContentItem[i].classList.remove('active')
        })
        this.classList.add('active')
        tabsContentItem[index].classList.add('active')
    })
})



// =========================Sekundomer========================

const watchBtn = document.querySelector('.stopwatch__btn'),
    watchInfo = document.querySelector('.tabsLink__span'),
    watchHours = document.querySelector('.stopwatch__hours'),
    watchMinutes = document.querySelector('.stopwatch__minutes'),
    watchSeconds = document.querySelector('.stopwatch__seconds');

watchBtn.addEventListener('click', function () {
    if (this.innerHTML == 'start') {
        watchInfo.classList.add('active')
        this.innerHTML = 'stop'
        let i = 0
        stopWatch(this, i)
    } else if (this.innerHTML == 'stop') {
        watchInfo.classList.remove('active')
        watchInfo.classList.add('active_clear')
        this.innerHTML = 'clear'
    } else {
        watchInfo.classList.remove('active_clear')
        this.innerHTML = 'start'
        watchHours.innerHTML = 0
        watchMinutes.innerHTML = 0
        watchSeconds.innerHTML = 0
    }
})

function stopWatch(el, i) {
    if (el.innerHTML == 'stop') {
        if (i == 60) {
            i = 0
            watchSeconds.innerHTML = i
            if (watchMinutes.innerHTML == 59) {
                watchMinutes.innerHTML = 0
                watchHours.innerHTML++
            } else {
                watchMinutes.innerHTML++
            }
        } else {
            watchSeconds.innerHTML = i
            i++
        }
        setTimeout(() => {
            stopWatch(el, i)
        }, 1000)
    }
}