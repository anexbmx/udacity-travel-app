
import { differenceInDays, weatherDateFormat } from "./helper";

/**
 * @description creating content (to Display Information About Country)
 * @param  data 
 * @return {string}
 */
function generateInfoContainer_UI(data) {
    return `
        <h3 class="head-section fas fa-globe m-0"> Country Info</h3>

        <div class="media">
            <figure>
                <img width="120"
                    class="img-fluid"
                    src="${data.flag}"
                    alt="">
                <figcaption>${data.name}</figcaption>
            </figure>
                <div class="media-body">
                    <ul>
        
                        <li>
                            <span class="icon fas fa-language"></span>
                            <span class="key">Language</span>
                            <span class="value"> ${data.language} </span>
                        </li>
                        <li>
                            <span class="icon fas fa-city"></span>
                            <span class="key">Capital</span>
                            <span class="value"> ${data.capital} </span>
                        </li>
                        <li>
                            <span class="icon fas fa-globe"></span>
                            <span class="key">Region</span>
                            <span class="value"> ${data.region} </span>
                        </li>
        
                        <li>
                            <span class="icon fas fa-users"></span>
                            <span class="key">population</span>
                            <span class="value"> ${data.population}</span>
                        </li>
        
                    </ul>
                </div> 
        
        </div>
    `;

}

/**
 * @description creating content (to Display Weather )
 * @param  data 
 * @return {string}
 */

function generateWeatherContainer_UI(data) {
    let today = data.shift();
    let bodyTable = "";
    for (let item of data) {
        const datetime = weatherDateFormat(item.datetime);
        bodyTable += `
             <tr>
                <td><img width="40"
                         src="https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png"
                         alt=""></td>
                <td>
                    <p class="m-0">${datetime[0]}</p>
                    <span class="sm-text text-secondary">${datetime[1]}</span>
                </td>
                <td class="temp">${item.temp}°</td>
                <td>${item.max_temp}°</td>
                <td>${item.min_temp}°</td>
            </tr>
        `;
    }

    return `
    <h3 class="head-section fas fa-cloud-sun m-0"> Weather</h3>
    <div class="today-box">
        <img width="60" src="https://www.weatherbit.io/static/img/icons/${today.weather.icon}.png"
             alt="">
        <div>
            <p class="today-text">today</p>
            <h5 class="m-0 temp">${today.temp}°</h5>
            <p class="m-0">${today.weather.description}</p>
            <p class="m-0"><span class="high-temp">High</span> ${today.max_temp}°, <span class="low-temp">Low</span> ${today.min_temp}°</p>
    
        </div>
    </div>
    <table>
        <thead>
            <th class="icon"></th>
            <th class="date">Date</th>
            <th>Temp</th>
            <th class="heigh">High</th>
            <th class="low">low</th>
        </thead>
        <tbody>${bodyTable}</tbody>
    </table>
    `;
}

/**
 * @description adding Card HTML to the page
 * @param {}  data 
 * @param { string } selector 
 */
function generateCardTrip_UI(item, selector) {
    const container = document.querySelector(selector);

    if(selector == "#myModal #trip-data") {
        container.parentElement.parentElement.style.display = "block";
        container.innerHTML = "";
    }

    container.insertAdjacentHTML('afterbegin', `
        <article class="card">
            <h4 class="heading-card">${item.city.name}, ${item.country.name}</h4>
            <article class="container-info">
                <img src="${item.image}"
                    alt="${item.city.name}"
                    class="main-img">
                    <h4 class="heading-tab">My trip to : ${item.city.name}, ${item.country.name} Departing: 
                    <span class="date-depart">${item.dateDepart.toDateString()}</span>
                    </h4>
                    <p class="text-secondary paragraph-tab m-0">Is <b>${differenceInDays(item.dateDepart, new Date())}</b> Days away</p>
                    <p><b>Length Trip</b> : ${differenceInDays(item.dateReturn, item.dateDepart)} days</p>
                    ${generateInfoContainer_UI(item.country)}
            </article>
            <div class="container-weather">
                    ${generateWeatherContainer_UI(item.weather)}
            </div>
           
        </article>
    `)

}


function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

export {
    generateCardTrip_UI,
    generateInfoContainer_UI,
    generateWeatherContainer_UI,
    closeModal
}