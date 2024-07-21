const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

document.addEventListener('DOMContentLoaded', () => {   // To ensure that the code runs only after the HTML is fully loaded
    const addNewGoal = () => {
        const goalInput = document.querySelector('#goalInput').value.trim(); // 
        const goalListItems = document.querySelectorAll('#goalList li');

        // To check for the duplicates
        let Duplicate = false;
        goalListItems.forEach(goal => {
            if (goal.textContent.trim().toLowerCase() === goalInput.toLowerCase()) {
                Duplicate = true;
            }
        });

        // To Prevent duplicates
        if (Duplicate) {
            alert('Goal already exists!');
        } else {
            const newGoal = document.createElement('li');
            newGoal.textContent = goalInput;
            document.querySelector('#goalList').appendChild(newGoal);
        }
    };

    // It Triggers the addNewGoal function when the button is clicked
    document.querySelector('#submitGoal').addEventListener('click', addNewGoal); 
});


///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
