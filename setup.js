weight = document.getElementById("weight").value;
fullName = document.getElementById("fullname").value;
age = document.getElementById("age").value;
setBefore = true;

if (localStorage.getItem("weight") === null) {
setBefore = false;
}

else {
    document.getElementById("weight").value = localStorage.getItem("weight");
    document.getElementById("fullname").value = localStorage.getItem("fullName");
    document.getElementById("age").value = localStorage.getItem("age");
    document.getElementById("sex").value = localStorage.getItem("sex");
    document.getElementById("ft").value = localStorage.getItem("ft");
    document.getElementById("in").value = localStorage.getItem("inches");
    document.getElementById("reminder").value = localStorage.getItem("reminder");

}

function goToSetUpPage(){
    window.location = "setup.html";
}

function goToMainPage(){

    weight = document.getElementById("weight").value;
    fullName = document.getElementById("fullname").value;
    age = document.getElementById("age").value;
    ft = document.getElementById("ft").value;
    inches = document.getElementById("in").value;
    reminder = document.getElementById("reminder").value;
    sex = document.getElementById("sex").value;

    if (weight === "" || ft === "" || inches === "" || sex === "" 
    || fullName === "" || age === "" || weight <= 0 || age <= 0){
        window.alert("Please fill in all the fields. Inputs for numbered values also can't be negative or 0. Check-In time is optional.");
    }
    else{
        if (weight > 700) {
            weight = 700;
        }
        caloriesGoal = Math.floor(15 * weight);
        fatGoal = Math.floor(0.45 * weight);
        proteinGoal = Math.floor(weight*0.9);
        carbGoal = Math.floor(weight);
        caloriesBurnedGoal = Math.floor(6*weight);

        localStorage.setItem('fullName', fullName);
        localStorage.setItem('weight', weight);
        localStorage.setItem('age', age);
        localStorage.setItem('sex', sex);
        localStorage.setItem('ft', ft);
        localStorage.setItem('inches', inches);

        localStorage.setItem('caloriesGoal', caloriesGoal);
        localStorage.setItem('caloriesBurnedGoal', caloriesBurnedGoal);
        localStorage.setItem('fatGoal', fatGoal);
        localStorage.setItem('proteinGoal', proteinGoal);
        localStorage.setItem('carbGoal', carbGoal);

        localStorage.setItem('reminder', reminder);

        if (!setBefore) {
            localStorage.setItem('daysTracked', 0);
            localStorage.setItem('caloriesCurrDay', 0);
            localStorage.setItem('caloriesBurnedCurrDay', 0);
            localStorage.setItem('fatCurrDay', 0);
            localStorage.setItem('proteinCurrDay', 0);
            localStorage.setItem('carbCurrDay', 0);

            localStorage.setItem('caloriesAvg', 0);
            localStorage.setItem('caloriesBurnedAvg', 0);
            localStorage.setItem('fatAvg', 0);
            localStorage.setItem('proteinAvg', 0);
            localStorage.setItem('carbAvg', 0);
        }

        window.location = "mainPage.html";
    }
}

function back() {
    if (setBefore) {
        window.location = "mainPage.html";
    }
    else {
        window.location = "start.html";
    }
}


