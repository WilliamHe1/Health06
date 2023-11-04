function fillTables() {

    avgTableContent = document.getElementById("healthReport");
    currDayTable = document.getElementById("currDay")
    header = document.getElementById("mainPageTitle");

    fullName = localStorage.getItem('fullName');
    daysTracked = localStorage.getItem('daysTracked');

    caloriesGoal = localStorage.getItem('caloriesGoal');
    caloriesBurnedGoal = localStorage.getItem('caloriesBurnedGoal');
    fatGoal = localStorage.getItem('fatGoal');
    proteinGoal = localStorage.getItem('proteinGoal');
    carbGoal = localStorage.getItem('carbGoal');

    caloriesAvg = localStorage.getItem('caloriesAvg');
    caloriesBurnedAvg = localStorage.getItem('caloriesBurnedAvg');
    fatAvg = localStorage.getItem('fatAvg');
    proteinAvg = localStorage.getItem('proteinAvg');
    carbAvg = localStorage.getItem('carbAvg');

    caloriesCurrDay = localStorage.getItem('caloriesCurrDay');
    caloriesBurnedCurrDay = localStorage.getItem('caloriesBurnedCurrDay');
    fatCurrDay = localStorage.getItem('fatCurrDay');
    proteinCurrDay = localStorage.getItem('proteinCurrDay');
    carbCurrDay = localStorage.getItem('carbCurrDay');



    content = `${fullName}'s Health Report`;
    header.innerHTML = content;

    content = `<caption>Daily Averages (Days Tracked: ${daysTracked})</caption>`;
    content += "<tr><td>Macronutrient</td><td>Average Daily Consumption</td><td>Goal</td></tr>";
    content += `<tr><td>Calories</td><td>${caloriesAvg}</td><td>${caloriesGoal}</td></tr>`;
    content += `<tr><td>Fat (g)</td><td>${fatAvg}</td><td>${fatGoal}</td></tr>`;
    content += `<tr><td>Protein (g)</td><td>${proteinAvg}</td><td>${proteinGoal}</td></tr>`;
    content += `<tr><td>Carbs (g)</td><td>${carbAvg}</td><td>${carbGoal}</td></tr>`;
    content += `<tr><td></td><td>Average Calories Burned/Day</td><td></td></tr>`;
    content += `<tr><td></td><td>${caloriesBurnedAvg}</td><td>${caloriesBurnedGoal}</td></tr>`;
    avgTableContent.innerHTML = content;

    content = `<caption>Today's Progress</caption>`;
    content += "<tr><td>Macronutrient</td><td>Consumption</td></tr>";
    content += `<tr><td>Calories</td><td>${caloriesCurrDay}</td></tr>`;
    content += `<tr><td>Fat (g)</td><td>${fatCurrDay}</td></tr>`;
    content += `<tr><td>Protein (g)</td><td>${proteinCurrDay}</td></tr>`;
    content += `<tr><td>Carbs (g)</td><td>${carbCurrDay}</td></tr>`;
    content += `<tr><td></td><td>Calories Burned</td></tr>`;
    content += `<tr><td></td><td>${caloriesBurnedCurrDay}</td></tr>`;

    currDayTable.innerHTML = content;

}

function resetUser(){
    if(window.confirm("Warning: All tracking data will be deleted when you reset health tracking. Are you sure you want to continue?")){
        localStorage.clear();
        window.location = "setup.html";
    }
}
function updateUser(){
    window.location = "setup.html";
}

function clearDay() {

    localStorage.setItem('caloriesCurrDay', 0);
    localStorage.setItem('caloriesBurnedCurrDay', 0);
    localStorage.setItem('fatCurrDay', 0);
    localStorage.setItem('proteinCurrDay', 0);
    localStorage.setItem('carbCurrDay', 0);

    fillTables();
}

function endDay() {

    daysTracked = Number(localStorage.getItem('daysTracked')) + 1;

    caloriesAvg = Number(localStorage.getItem('caloriesAvg'));
    caloriesBurnedAvg = Number(localStorage.getItem('caloriesBurnedAvg'));
    fatAvg = Number(localStorage.getItem('fatAvg'));
    proteinAvg = Number(localStorage.getItem('proteinAvg'));
    carbAvg = Number(localStorage.getItem('carbAvg'));

    caloriesCurrDay = Number(localStorage.getItem('caloriesCurrDay'));
    caloriesBurnedCurrDay = Number(localStorage.getItem('caloriesBurnedCurrDay'));
    fatCurrDay = Number(localStorage.getItem('fatCurrDay'));
    proteinCurrDay = Number(localStorage.getItem('proteinCurrDay'));
    carbCurrDay = Number(localStorage.getItem('carbCurrDay'));

    localStorage.setItem('caloriesAvg', Math.floor((caloriesAvg+caloriesCurrDay)/daysTracked));
    localStorage.setItem('caloriesBurnedAvg', Math.floor((caloriesBurnedAvg+caloriesBurnedCurrDay)/daysTracked));
    localStorage.setItem('fatAvg', Math.floor((fatAvg+fatCurrDay)/daysTracked));
    localStorage.setItem('proteinAvg', Math.floor((proteinAvg+proteinCurrDay)/daysTracked));
    localStorage.setItem('carbAvg', Math.floor((carbAvg+carbCurrDay)/daysTracked));

    localStorage.setItem('daysTracked', daysTracked);

    clearDay();

}

function addMeal() {

    window.location = "addMeal.html"

}

function addExercise() {

    window.location = "addExercise.html"

}

fillTables();