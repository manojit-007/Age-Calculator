let dateOfBirth = document.getElementById("birth-date");
let targetDate = document.getElementById("target-date");
let btn = document.querySelector(".btn");

let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");

let display = document.querySelector(".display");
let error = document.querySelector(".error");

function currentDate() {
    let date = new Date();
    let formattedDate = date.toISOString().slice(0, 10);
    targetDate.value = formattedDate;
    dateOfBirth.value = formattedDate;
}

currentDate();

function displayAge(yy, mm, dd) {
    if (yy >= 0 && yy < 100 && mm >= 0 && dd >= 0) {
        year.textContent = `${yy < 10 ? "0" + yy : yy} Years`;
        month.textContent = `${mm < 10 ? "0" + mm : mm} Months`;
        day.textContent = `${dd < 10 ? "0" + dd : dd} Days`;

        error.style.display = "none";
        display.style.display = "flex";
    } else if (yy >= 100 && mm >= 0 && dd >= 0) {
        display.style.display = "flex";
        year.textContent = `${yy < 10 ? "0" + yy : yy} Years`;
        month.textContent = `${mm < 10 ? "0" + mm : mm} Months`;
        day.textContent = `${dd < 10 ? "0" + dd : dd} Days`;
        error.innerText = `You are a centenarian`;
        error.style.display = "block";
    } else {
        error.style.display = "block";
        display.style.display = "none";
    }
}

function calculateAge() {
    let birthDate = new Date(dateOfBirth.value);
    let targetOfDate = new Date(targetDate.value);
    let ageInMilliseconds = targetOfDate - birthDate;
    let ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    let yy = Math.floor(ageInYears);
    let remainYear = ageInYears - yy;
    let mm = Math.floor(remainYear * 12);
    let remainMonth = remainYear * 12 - mm;
    let dd = Math.floor(remainMonth * 30);

    displayAge(yy, mm, dd);
}

// Event listener for the button
btn.addEventListener("click", calculateAge);
