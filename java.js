const names = ["Marge", "Nick", "Leonard", "Thomas", "Samantha", "Todd", "Harry", "Pat", "Larry"];
const jobs = ["Gardener", "Teacher", "Tech", "Plumber", "Electrician"];

function randFl() {
    const nameNum = Math.floor(Math.random() * names.length);
    const jobNum = Math.floor(Math.random() * jobs.length);
    const priceNum = Math.floor(Math.random() * 100) + 50;

    const fL = {
        namee: names[nameNum],
        jobb: jobs[jobNum],
        price: priceNum
    };
    return fL;
}

function calculateAverage() {
    const totalPrice = freeList.reduce((total, fL) => total + fL.price, 0);
    const averagePrice = totalPrice / freeList.length;
    return averagePrice.toFixed(2);
     
}




function render() {
    const html = freeList.map((fL) => {
        return `<div>${fL.namee} ${fL.jobb} ${fL.price}</div>`;
    });
    const container = document.querySelector(".container");
    container.innerHTML = html.join("");
    const averagePriceDisplay = document.querySelector(".average-price");
    averagePriceDisplay.textContent = `Average Price: $${calculateAverage()}`;
}
const freeList = [];
const interval = setInterval(() => {
    const obj = randFl();
    freeList.push(obj);
    render();
    if (freeList.length === 10) {
        clearInterval(interval);
    }
}, 1000);
render();
