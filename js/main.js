fetch('./data.json')
    .then((response) => response.json())
    .then(function (json) {
        //Setting a height in % (with plus 50px, just for aesthetic purposes) to all bars based in the "amount" value of the json
        
       for (let i = 0; i < json.length; i++) {
        let bar = document.querySelector(`.graphs__bar-${weekday[i]}`)
        bar.style.height = `calc(${json[i].amount}% + 50px)`
        bar.setAttribute('money', `$${json[i].amount}`)
       }
        
     });


const weekday = ["sun","mon","tue","wed","thu","fri","sat"];
const d = new Date();
let day = weekday[d.getDay()];
const todayBar = document.querySelector(`.graphs__bar-${day}`);
//Set active state based on the current day
todayBar.classList.add("today--bar");

