var total = document.getElementById("total");
var recover = document.getElementById("recover");
var death = document.getElementById("death");
// population country
let countryPopulation = document.getElementById("total-population");

async function dailyCovid19() {
    const res = await fetch(`https://covid19.mathdro.id/api`);
    return res.json()
        .then((data) => {
            var totalWorld = data.confirmed.value;
            total.textContent = totalWorld.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            var recoverWorld = data.recovered.value;
            recover.textContent = recoverWorld.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            var deathWorld = data.deaths.value;
            death.textContent = deathWorld.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        })
        .catch((err) => {
            return err;
        })
}
dailyCovid19();
// current timer
var time = document.getElementById("timer");
function timer() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var times = "AM";
    if (hours > 12) {
        times = "PM";
        hours = hours - 12;
    }
    if (hours === 0) {
        hours = 12
    }
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    var display = `${hours} : ${minutes} : ${seconds} ${times}`;
    time.textContent = display;
    setTimeout(timer, 1000);
}; timer();
// search
var search = document.getElementById("search");
var country = document.getElementById("country");
var totalCases = document.getElementById("total-cases");
var totalRecovered = document.getElementById("total-recovered");
var totalDeaths = document.getElementById("total-deaths");
var countryName = document.getElementById("name");
var camFlag = document.getElementById("flag");
async function cambo() {
    const cam = await fetch(`https://restcountries.eu/rest/v2/name/${country.value}`);
    return cam.json()
        .then((data) => {
            var camFlag = document.getElementById("flag");
            camFlag.src = data[0].flag;
            countryName.textContent = data[0].name;
            countryPopulation.textContent = 'Population: ' + data[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        })
        .catch((err) => {
            console.log(err);
        })
}
cambo();
async function camboInfos() {
    const cambos = await fetch(`https://covid19.mathdro.id/api/countries/${country.value}`);
    return cambos.json()
        .then((data) => {
            totalCases.textContent = `Total Cases: ` + data.confirmed.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            totalRecovered.textContent = `Recovered: ` + data.recovered.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            totalDeaths.textContent = `Deaths: ` + data.deaths.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        })
        .catch((err) => {
            return err;
        })
}
camboInfos();
search.addEventListener("click", () => {
    var rotate = document.getElementById("rotate");
    rotate.classList.toggle("rotate-search");
    async function flagCountry() {
        const flag = await fetch(`https://restcountries.eu/rest/v2/name/${country.value}`);
        return flag.json()
            .then((data) => {
                var worldFlag = document.getElementById("flag");
                worldFlag.src = data[0].flag;
                countryName.textContent = data[0].name;
                countryPopulation.textContent = 'Population: ' + data[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            })
            .catch((err) => {
                console.log(err)
            })
    }
    flagCountry();
    async function covidinfos() {
        const world = await fetch(`https://covid19.mathdro.id/api/countries/${country.value}`);
        return world.json()
            .then((data) => {
                totalCases.textContent = `Total Cases: ` + data.confirmed.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                totalRecovered.textContent = `Recovered: ` + data.recovered.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                totalDeaths.textContent = `Deaths: ` + data.deaths.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            })
            .catch((err) => {
                async function cambodia() {
                    var cams = await fetch(`https://restcountries.eu/rest/v2/name/cambodia`);
                    return cams.json()
                        .then((camdata) => {
                            var errFlag = camdata[0].flag;
                            camFlag.src = errFlag;
                            countryName.textContent = camdata[0].name;

                        }).catch((camerr) => {
                            return camerr;
                        })
                }
                cambodia();
                async function covidCambodia() {
                    const cambos = await fetch(`https://covid19.mathdro.id/api/countries/cambodia`);
                    return cambos.json()
                        .then((data) => {
                            totalCases.textContent = `Total Cases: ` + data.confirmed.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            totalRecovered.textContent = `Recovered: ` + data.recovered.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            totalDeaths.textContent = `Deaths: ` + data.deaths.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            countryPopulation.textContent = 'Population: ' + data[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        })
                        .catch((err) => {
                            return err;
                        })
                }
                covidCambodia();

                var errors = document.getElementById("err");
                while (err) {
                    errors.style.display = "flex";
                    setTimeout(() => {
                        errors.style.display = "none";
                        country.value = "cambodia";
                    }, 2000);

                    break;
                }
            })
    }
    covidinfos();
});

// populations
async function population() {
    let pop = await fetch(`https://restcountries.eu/rest/v2`);
    return pop.json().then((data) => {
        let popArr = [];
        for (let p = 0; p < data.length; p++) {
            popArr.push(data[p].population)
        }
        addPeopleWorld = 0;
        for (let add = 0; add < popArr.length; add++) {
            addPeopleWorld += popArr[add];
        }
        let all = addPeopleWorld.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById("population").innerHTML = all;
    }).catch((err) => {
        return err;
    })
}
population();

// next year
function timeYear() {
    let nextYear = document.getElementById("next-year");
    let created = 2021;
    let nextDate = new Date();
    let nexty = nextDate.getFullYear();
    if (nexty > created) {
        nextYear.textContent = " - " + nexty;
    }
    else {
        nextYear.textContent = '';
    }
}
timeYear();

let nameAll = document.getElementById("name-all");
let lists = document.getElementById("list-country");
let close = document.getElementById("close");
let body = document.querySelector("body");

nameAll.addEventListener("click", () => {
    lists.classList.add("show-lists")
    body.classList.add("stuck-on-sroll");
})

close.addEventListener("click", () => {
    lists.classList.remove("show-lists")
    body.classList.remove("stuck-on-sroll");
})

async function allCountry() {
    let all = await fetch(`https://covid19.mathdro.id/api/countries`);
    return all.json().then((data) => {
        let html = '';
        let dataFind = data.countries;
        for (let people = 0; people < dataFind.length; people++) {
            let nameCountrySearch = dataFind[people].name;
            html += `
            <div class="name-search" id=${nameCountrySearch}">
            <div class="check">
                    <img src="./Images/ok-circle.svg"/>
                </div>
                <p>${nameCountrySearch}</p>
            </div>
            `;
            console.log(nameCountrySearch)
        }
        let display = document.getElementById("display");
        display.innerHTML = html;
        document.getElementById("title-all").innerHTML = dataFind.length + " Countries Name";
    }).catch(err => err);
}
allCountry();