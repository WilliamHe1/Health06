function mealAdded() {

    calories = document.getElementById("calories").value;
    fat = document.getElementById("fat").value;
    protein = document.getElementById("protein").value;
    carbs = document.getElementById("carbs").value;

    caloriesCurrDay = localStorage.getItem('caloriesCurrDay');
    fatCurrDay = localStorage.getItem('fatCurrDay');
    proteinCurrDay = localStorage.getItem('proteinCurrDay');
    carbCurrDay = localStorage.getItem('carbCurrDay');

    if (calories === "" || fat === "" || protein === "" || carbs === "" || calories <= 0 || fat <= 0 || protein <= 0 || carbs <= 0){
        window.alert("Please fill in all the fields. Inputs for numbered values also can't be negative or 0.");
    }

    else {
        caloriesCurrDay = localStorage.getItem('caloriesCurrDay');
        caloriesBurnedCurrDay = localStorage.getItem('caloriesBurnedCurrDay');
        fatCurrDay = localStorage.getItem('fatCurrDay');
        proteinCurrDay = localStorage.getItem('proteinCurrDay');
        carbCurrDay = localStorage.getItem('carbCurrDay');

        localStorage.setItem('caloriesCurrDay', Number(caloriesCurrDay) + Number(calories));
        localStorage.setItem('fatCurrDay', Number(fatCurrDay) + Number(fat));
        localStorage.setItem('proteinCurrDay', Number(proteinCurrDay) + Number(protein));
        localStorage.setItem('carbCurrDay', Number(carbCurrDay) + Number(carbs));

        number = Number(caloriesCurrDay) + Number(calories);

        backToMainPage();

    }

}

function exerciseAdded() {

    duration = Number(document.getElementById("duration").value);

    if (duration === "" || duration <= 0) {

        window.alert("Please fill in all the fields. Inputs for numbered values also can't be negative or 0.");
    }

    else {
        calories = calculateCalories();
        caloriesBurnedCurrDay = Number(localStorage.getItem("caloriesBurnedCurrDay"));
        localStorage.setItem("caloriesBurnedCurrDay", calories + caloriesBurnedCurrDay);
        backToMainPage();
    }
    

}

function updateCaloriesField(){

    counterDisplay = document.getElementById("caloriesBurned");
    calories = calculateCalories();
    counterDisplay.innerHTML = `Calories burned: ${calories}`;

}

function backToMainPage() {
    window.location = "mainPage.html";
}

function calculateCalories() {
    type = document.getElementById("exerciseType").value;
    intensity = document.getElementById("intensity").value;
    duration = Number(document.getElementById("duration").value);

    calories = 0;

    if (duration != "" && duration > 0) {

        if (type == "cardio"){
            calories = duration * 4.5;
        }
        else {
            calories = duration * 4;
        }
        if (intensity == "low") {
            calories = calories * 2;
        }

        else if (intensity == "medium") {
            calories = calories * 3;
        }
        else if (intensity == "high") {
            calories = calories * 4;
        }
    }

    return Math.floor(calories);

}