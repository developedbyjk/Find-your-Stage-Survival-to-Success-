import data from "./data.js";
let container = document.getElementById("container");
let cardDescription = document.getElementById("card-description")

document.addEventListener('DOMContentLoaded', () => {

    console.log(data)

    let feedHtml = '';

    const stages = data.map(item => {
        let colorClass = "";
        if (item.Level > 0 && item.Level < 9) {
            colorClass = "red-color";
        } else if (item.Level > 8 && item.Level < 14) {
            colorClass = "blue-color";
        } else {
            colorClass = "green-color"
        }

        feedHtml += `
            <div class="card ${colorClass}">
            <div class="card-name">Level ${item.Level} : ${item.Name}</div>
            
            <div class="card-detail">
                <div class="es" >Emotion <br> <span id="bold">${item.emotionalStage}</span></div>
                <div class="line"> </div>
                <div class="vol">View of Life <br> <span id="bold">${item.vol}</span></div>
            </div>
            <div class="card-i" data-level="${item.Level}">🧐</div> 
            <div class="card-description" id="${item.Level}" style="display:none;">${item.description}</div>
            </div>
        `;
    });

    container.innerHTML = feedHtml;

    function showMore(num) {
        let descriptionElement = document.getElementById(num);
        if (descriptionElement) {
            descriptionElement.style.display = "block";
        }
    }

    document.addEventListener('click', event => {
        let dataLevel = event.target.getAttribute('data-level');
        if (dataLevel) {
            showMore(dataLevel);
        }
    });

});
