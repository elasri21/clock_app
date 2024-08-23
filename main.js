const moreBtn = document.querySelector(".more button");
const moreSpan = document.querySelector(".more span");
const moreDetails = document.querySelector(".bottom");
const main = document.querySelector("main .top");
const quot = document.querySelector(".quot blockquote");
const author = document.querySelector(".quot .author h3");
const refreshBtn = document.querySelector(".quot-coontainer button");
const greedingContainer = document.querySelector(".greeding");
moreBtn.addEventListener("click", function () {
    this.querySelector("img").classList.toggle('rotate');
    moreSpan.textContent = moreSpan.textContent == 'more' ? 'less' : 'more';
    moreDetails.classList.toggle("bounce");
    main.classList.toggle("bounce");

});

const timeZone = document.querySelector(".city h3");
const dayYear = document.querySelector(".days-year h3");
const dayWeek = document.querySelector(".days-week h3");
const week = document.querySelector(".week h3");
const abbreviation = document.querySelector(".current-time small");
const currentTime = document.querySelector(".current-time h2");
function getWorldTime() {
    axios.get('https://worldtimeapi.org/api/ip').then((quotesRes) => {
        const chosenQuote = quotesRes.data;
        const date = new Date(chosenQuote['datetime']);
        const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        const hour_min = `${hours}:${minutes}`;
        greeting(hours);
        timeZone.textContent = chosenQuote['timezone'];
        dayYear.textContent = chosenQuote['day_of_year'];
        dayWeek.textContent = chosenQuote['day_of_week'];
        week.textContent = chosenQuote['week_number'];
        abbreviation.textContent = chosenQuote['abbreviation'];
        currentTime.textContent = hour_min;
    }).catch((err) => console.error(err))
}

getWorldTime()
refreshBtn.addEventListener("click", getWorldTime);

function greeting(hour) {
    if (hour < 12) {
        greedingContainer.textContent = "Good Morning!";
    }
    else if (hour < 18) {
        greedingContainer.textContent = "Good Afternoon!";
    }
    else {
        greedingContainer.textContent = "Good Evening!";
    }
}

setInterval(function () {
    getWorldTime();
}, 1000)